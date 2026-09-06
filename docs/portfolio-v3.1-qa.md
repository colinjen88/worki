# 作品集 v3.1 QA 紀錄

測試日期：2026-09-06  
測試基準：`feat/portfolio-v3`，Next.js 16.3.4，靜態產物 `out/`。

| 項目 | 結果 | 證據／說明 |
|---|---|---|
| 型別檢查 | 通過 | `npm run typecheck` exit 0。 |
| 靜態建置 | 通過 | `npm run build` exit 0；輸出首頁、404 與四個案例 SSG 頁面。 |
| 靜態伺服器 | 通過 | `npm run start`（`serve out`）下，首頁、四案例、robots、sitemap 與 PDF 為 HTTP 200；未知 `/not-a-real-route/` 為 HTTP 404。 |
| 專案資產 | 通過 | 擷取 `projects.ts` 的 `/assets/` 路徑並逐一檢查，皆存在於 `public/`。 |
| 首頁互動 | 通過 | In-app Browser：功能型網站篩選由 11 件切換為 4 件；植園圖片控制由第 1 張切換至第 2 張。 |
| 影片彈窗 | 通過 | In-app Browser：開啟 Motion 作品後顯示對話框、YouTube iframe、正確 `watch?v=V_f5eONwmPo` 備援連結；Escape 關閉並將焦點還原至觸發按鈕。 |
| 行動版 390 × 844 | 通過 | 檢視首頁、固定導覽、Hero、作品卡片；修正標題斷字與品牌名稱截斷後重新建置。 |
| 內容與 SEO | 通過 | `robots.txt`、`sitemap.xml` 已輸出；四個已發布案例有 canonical、title 與 description。內容證據與待確認項見 `portfolio-content-audit.md`。 |

尚未執行：實機 iOS Safari、螢幕閱讀器抽查、Lighthouse 三次中位數、正式站部署與外站入口可用性檢查。這些項目不可視為已通過，應在預覽及發布階段補做。
