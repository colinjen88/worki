# let.gowork.run 新站交接文件

## 現況總結（2025-02-17）

### ✅ 已完成
1. **目錄結構**
   - 新站放在 `/let/` 子目錄，不影響舊版投履歷頁面
   - 完整頁面：`index.html`、`portfolio/index.html`、`about/index.html`、`contact/index.html`
   - 作品詳細頁：`portfolio/projects/mass.html`、`seo.html`、`motion.html`
   - 共用資源：`assets/let.css`、`assets/let.js`

2. **設計系統與主視覺（重大更新 2026-02-17）**
   - **大膽居中佈局**：重設計首頁 Hero Section，採用衝擊力強的居中對齊。
   - **動態字效**：加入 `text-gradient-animated` 閃爍漸層標題。
   - **視覺深度**：整合 `hero-grid` 3D 透視背景與動態發光氣泡（Orbs）。
   - **互動組件**：採用特製玻璃面板（Glassmorphism）與懸浮島式（Floating Island）導航/功能設計。

3. **核心功能**
   - 全域導航（含手機選單）
   - 作品集分類篩選（支援快捷鍵 1-5）
   - Lightbox（支援圖片與影片）
   - 焦點樣式與無障礙基礎

4. **作品詳細頁模板**
   - 統一故事線：背景 → 過程 → 成果 → 反思
   - 側邊專案資訊（sticky）
   - 上下篇導航
   - 成果展示區（圖片/影片 Lightbox）

### 🚧 進行中
- **等待專案真實資訊**：3 個作品頁的具體專案名稱、決策、成果數據
- **寫法方向**：求職導向、中文為主、強調關鍵決策與影響

### 📋 待辦清單
1. **高優先級**
   - [ ] 取得 3 個專案真實資訊（A/B/C）
   - [ ] 重寫 `mass/seo/motion` 三頁文案
   - [ ] 更新作品集列表卡片標題/摘要/標籤
   - [ ] 確保 Lightbox 影片檔案路徑正確

2. **中優先級**
   - [ ] 補齊 `contact/index.html` 的真實 email/社群連結
   - [ ] 抽共用 header/footer 為元件（減少重複）
   - [ ] 加入專案資料 JSON 驅動列表

3. **低優先級**
   - [ ] SEO/Schema 優化
   - [ ] 動效系統（GSAP/Lenis）整合
   - [ ] 媒體優化（WebP/LQIP）

## 檔案結構
```
let/
├── index.html                    # 新站首頁
├── portfolio/
│   ├── index.html               # 作品集列表（含篩選）
│   └── projects/
│       ├── mass.html            # UI/UX 專案
│       ├── seo.html             # Web/SEO 專案
│       └── motion.html          # Motion 專案
├── about/
│   └── index.html               # 關於頁面
├── contact/
│   └── index.html               # 聯絡頁面
└── assets/
    ├── let.css                  # 新站專用樣式
    └── let.js                   # 新站專用腳本
```

## 技術棧
- **CSS**: Tailwind CSS v4.1.18
- **字體**: Inter + Noto Sans TC
- **圖標**: Lucide Icons
- **動效**: 原生 CSS + 規劃 GSAP/Lenis
- **建構**: `npm run build:css`

## 部署注意事項
1. **域名對應**：`let.gowork.run` 需指向 `/let/` 目錄
2. **相對路徑**：已處理好 `../assets/` 與 `../../assets/` 引用
3. **圖片資源**：暫用 `assets/` 現有檔案，後續可替換

## 設計規範摘要
- **主色調**：深藍色系 (#0f172a)
- **強調色**：Indigo → Purple 漸層
- **字階**：Display 72px → Caption 12px
- **間距**：4px 基礎單位系統
- **動效**：150ms-800ms，ease-out/ease-in-out/spring

## 下一步行動
1. **換電腦後**：檢查本地 server 是否正常運行
2. **提供專案資訊**：按照 A/B/C 模板提供 3 個專案真實內容
3. **驗證 Lightbox**：特別是 `motion.html` 的影片播放
4. **部署測試**：確認 `let.gowork.run` 路徑對應

## 聯絡與回饋
- 若部署遇到路徑問題，可考慮：
  - 設定 publish directory 為 `let/`
  - 或用 rewrite 規則將根目錄導向 `let/`
- 圖片/影片檔案若需更換，請放在 `assets/` 目錄

---
*最後更新：2026-02-17*
