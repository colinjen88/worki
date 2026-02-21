# 前端頁面效能優化分析報告：初次載入時間 (FCP/LCP) 改善計畫

## 1. 效能瓶頸分析

從目前的 `index.html` 及相關資源結構來看，造成「初次載入頁面時間太久」及 Loading 畫面出現延遲的主要原因有以下幾點：

### A. 渲染阻塞資源 (Render-blocking Resources)
在 `<head>` 區塊中，載入了多個第三方的 JavaScript 函式庫，但在引入時未加上 `defer` 或 `async` 屬性。當瀏覽器解析 HTML 時遇到這些載入指令，會暫停後續的 HTML 解析並優先下載、執行這些腳本，這直接卡住了網頁第一時間的渲染（包含 Loading 畫面的出現）。
- **阻塞點：**
  - `lucide@0.575.0`
  - `lenis.min.js`
  - `gsap.min.js`
  - `ScrollTrigger.min.js`

### B. CSS 資源增加 HTTP 請求
目前將樣式拆分為獨立的檔案 (`styles.css`, `loading.css`, `portfolio.css`)。雖然有利於管理，但也增加了初次載入時的 HTTP 請求數。特別是 `loading.css` 也是作為外部檔案載入，會延長白畫面空窗期，延遲 Loading 畫面的渲染。

### C. 大體積的多媒體資源 (圖片與 GIF)
在 `assets/` 內有多張預覽圖與大容量的 GIF 檔 (如 `lottie_animate.gif` 大小約 4.4MB，`loading_animation.gif` 約 750KB)。
- 高解析度的 `.jpg` 和 `.png` 即便有加上 `loading="lazy"`，由於體積龐大，在滑動解析時仍會嚴重消耗網路資源。
- 傳統 GIF 檔案容量沒有最佳化，極度容易影響效能與佔用大量頻寬。

### D. 第三方字型載入策略
Google Fonts (中文字型 Noto Sans TC) 檔案龐大，即使加了 preconnect 與 preload，但在等待字型載入完成前，會有一段顯示不出字體的隱形期間 (FOIT)，讓人覺得網頁還在卡頓狀態。

---

## 2. 建議執行的優化計畫清單

### 🚀 第一階段：快速見效 (Quick Wins) - ⭐ 建議優先執行
1. **[關鍵] 腳本加上延遲載入：**
   為 `<head>` 裡的第三方套件 (`lenis`, `gsap`, `ScrollTrigger`, `lucide`) 加入 `defer` 屬性。這將使得腳本讓出主執行緒，在背景下載完全不卡 HTML 的解析，並於 HTML 解析完畢後再執行，**能大幅提早 Loading 畫面的出現時間！**
2. **內聯 Loading 動畫樣式 (Critical CSS)：**
   將 `loading.css` 的代碼抓出，直接寫入 `index.html` 的 `<head>` `<style>` 區段中。這能確保瀏覽器一看到 HTML 就能馬上將 Loading 動畫顯示出來，消除白畫面。

### 🖼️ 第二階段：多媒體資源最佳化
1. **圖片轉換為新世代 WebP 格式：**
   將所有用到的 `.jpg` 及 `.png` 轉檔為儲存空間更小且不失真的 `.webp` 格式。此舉能將整體圖片體積降低約 30% - 60%。
2. **將大型 GIF 轉交給較輕量的影片格式 (WebM/MP4)：**
   高達 4.4MB 的動圖如能換成 `<video autoplay loop muted playsinline>` 呈現，會讓大小縮減逾 80%，並且有較流暢的幀率。

### ⚙️ 第三階段：程式面清理與延遲執行
1. **推遲重量級動畫初始化：**
   修改 `assets/main.js`，將耗費效能的 GSAP 初始化與 Lenis 平滑滾動計算抽離，放入 `DOMContentLoaded` 或是等待 Loading 畫面消失後再執行。

---

## 3. 下一步執行確認

若您讀畢上述分析並無疑慮，我可以直接幫您著手執行下列自動化操作：
1. **修改 `index.html`**：加入 `defer` 屬性並將 Loading CSS 轉為 Inline Style (內聯樣式)。
2. **自動批次處理資源**：自動掃瞄 `assets` 目錄下的大型圖片（如 `.jpg` / `.png`），轉出 WebP 並替換掉原本在 HTML / CSS 的引用。
3. **安全修改 `main.js`**：把對應的執行時機適當延後。

👉 **如果您已經閱讀完畢，且同意從第一階段開始執行，請直接回覆讓我開始！**
