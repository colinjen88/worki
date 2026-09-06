# Next.js 亮暗雙主題整合提示詞 (Prompt for Codex)

## Context & Goal (背景與目標)
我們目前擁有同一個 Next.js (App Router, v16) 專案的兩個版本：
1. **主分支 (Main Branch)**：主要作為「深色模式 (Dark Mode)」版本的網站，擁有完整的深色視覺與架構。
2. **V3 亮色版分支 (Light Mode Feature Branch)**：近期在此分支進行了大幅度的視覺與組件升級，包含全新的 Hero 核心特點卡片、流動極光動態背景、無障礙導覽等，且目前被強制鎖定在亮色模式（移除了原先的深色切換邏輯）。

**目標**：將「V3 亮色版分支」的全新組件與視覺升級，完美整合回「主分支」，並恢復平滑的「亮/暗模式 (Light/Dark Mode) 雙主題切換」功能。

---

## Key Updates in V3 Light Branch (亮色版的主要升級項目)
在整合時，請確保以下新功能被保留並適配雙主題：
1. **Hero 核心特點大卡 (`src/components/Hero.tsx`)**：
   - 移除了舊版的「物理手感模擬工作台」。
   - 新增了 `.hero-strengths-card`，清晰展示三大核心特質（零溝通斷層、動態不炫技、邊界狀況全維護），並帶有 Hover 狀態預覽互動。
2. **全域動態背景 (`src/components/DynamicBackground.tsx`)**：
   - 新增了 `DynamicBackground` 元件，包含 4 組平滑緩動的流動極光 (`.aurora-orb`)、互動式滑鼠環境光 (`.aurora-cursor-glow`)、以及背景漂浮幾何微符號 (`.bg-floating-accent`)。
   - `globals.css` 中的 `.site-shell` 改為透明，將動態背景置於 `z-index: 0`。
3. **無障礙體驗提升 (`src/components/SkipLink.tsx`)**：
   - 在 `layout.tsx` 的最頂端加入了 `SkipLink` 元件。

---

## Integration Requirements & Steps (整合需求與執行步驟)

請依序執行以下整合步驟，確保程式碼不衝突且過渡平滑：

### Step 1: 恢復與整合 Theme 切換機制
- 在主分支中重新確認或引入 `next-themes` (或專案原有的 Theme Context)。
- 修改 `src/components/Navbar.tsx` 中的主題切換按鈕。將目前亮色版分支中寫死跳轉到 `https://let.gowork.run/` 的月亮 Icon，改回觸發 `setTheme('dark' | 'light')` 的功能。

### Step 2: 合併 CSS 變數 (`globals.css`)
- 整合 `:root` (Light) 與 `[data-theme="dark"]` (Dark) 的 Design Tokens。
- **亮色版變數**：請保留 V3 亮色版中微調過的色碼（如 `--surface-page: #fafbfc`、`--surface-card`、`--brand` 等）。
- **深色版變數**：請補齊對應的深色色碼，確保在切換到 `[data-theme="dark"]` 時，所有 V3 新增的 class 都能無縫轉暗。

### Step 3: 適配 Hero 核心卡片的深色模式
- 確保 `src/components/Hero.tsx` 中的 `.hero-strengths-card` 及其內部的 `.strength-item`、`.strength-tag`、`.demo-pill` 等樣式，在切換至深色模式時能正確吃到深色的 `var(--surface-card)`、`var(--border-subtle)`。
- 確認毛玻璃效果 `backdrop-filter: blur(16px)` 在深色模式下的透明度依然美觀。

### Step 4: 動態背景 (DynamicBackground) 的雙主題適配
- V3 分支的極光球體（Aurora Orbs）使用了 `mix-blend-mode: multiply` 來融入亮色背景。
- **重要調整**：在 `globals.css` 中，針對 `[data-theme="dark"] .aurora-orb` 與 `[data-theme="dark"] .aurora-cursor-glow`，請將其 `mix-blend-mode` 改為 `screen` 或 `plus-lighter`，並適度降低 `opacity` (例如降至 `0.15` - `0.2`)，確保極光在深色背景下發出柔和的亮光，而不是變成死黑。
- 確保科技點陣網格 (`.dynamic-bg-grid`) 的 `var(--dot-color)` 在深色模式下切換為白色微光（如 `rgba(255,255,255,0.08)`）。

### Step 5: Meta 與 PWA 狀態列更新
- 確保 `src/app/layout.tsx` 中的 `viewport.themeColor` 支援陣列形式，根據系統/主題自動變化：
  ```typescript
  export const viewport = {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#fafbfc" },
      { media: "(prefers-color-scheme: dark)", color: "#080c14" }
    ]
  }
  ```

### Step 6: 網站效能與 SEO 進階優化 (Performance & SEO Enhancements)
請在整合的最後階段，順手套用以下能大幅提升效能與 SEO 評分的優化方案：
1. **字體效能優化 (next/font)**：目前專案依賴系統字體或外部載入。請在 `layout.tsx` 引入 `next/font/google` (如 `Inter` 與 `Noto_Sans_TC`)，徹底消除字體載入時的版面偏移 (CLS)。
2. **動態背景效能保護 (Reduced Motion)**：針對 `<DynamicBackground />` 中的大量 blur 與漸層計算，請在 CSS 中加入 `@media (prefers-reduced-motion: reduce)` 來暫停極光動畫，或降低移動端的 blur 數值，以保障低階裝置的順暢度與電池壽命。
3. **結構化資料 (JSON-LD)**：在首頁 `<head>` 中注入 Schema.org 的 `Person` 或 `ProfilePage` 結構化資料 (JSON-LD)，提升 Google 搜尋引擎對「前端工程師/設計師」身份的精準識別。
4. **Sitemap 自動生成**：利用 Next.js 14+ 內建功能，在 `src/app/` 底下新增 `sitemap.ts`，並自動爬取 `projects.ts` 裡的專案列表，產出完整的 `sitemap.xml` 確保所有案例均被完美收錄。

---

### 最終驗收標準 (Acceptance Criteria)
1. 點擊導覽列的太陽/月亮按鈕，能瞬間平滑切換全站亮暗模式。
2. 亮色模式維持 V3 分支的高質感極光與亮白設計。
3. 深色模式下，新版的 Hero 卡片與動態背景光暈能完美適應，不刺眼且文字對比度符合 WCAG 標準。
