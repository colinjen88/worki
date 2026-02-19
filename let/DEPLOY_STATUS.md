
# 部署狀態與行動計畫
- **專案名稱**: WANG's Portfolio (let.gowork.run)
- **當前位置**: `c:\git_work\worki\let\`
- **目標伺服器**: 145.79.28.71 (VPS)

## 🚧 已完成進度
1. **GitHub 同步**: 本地代碼（包含最新的 CSS 抽取、分類篩選更新）已全部推送到 GitHub `master` 分支。
2. **部署腳本**: 已建立自動化 PowerShell 部署腳本 (`deploy_vps_let.ps1`)。
   - 功能：自動安裝 Nginx/Git/Certbot、拉取 GitHub 代碼、設定 Nginx、申請 SSL 憑證。
   - 修正點：Nginx Root 路徑已修正為 `/var/www/html/worki/let` 以解決 403 錯誤。

## 🔴 當前遭遇問題
- **SSH 連線超時**: 本地環境無法通過 Port 22 連接到 `145.79.28.71`。
  - 錯誤訊息：`ssh: connect to host 145.79.28.71 port 22: Connection timed out`
  - 狀態：Ping 是通的 (伺服器在線)，但 SSH 埠口無回應。

## ⏭️ 下一步行動 (換電腦後)
1. **驗證 SSH 連線**:
   - 在新電腦開啟終端機 (PowerShell 或 CMD)。
   - 執行 `ssh root@145.79.28.71` 測試連線。
   - 如果需要密碼，準備好 root 密碼。

2. **執行部署**:
   - 如果您已有 Git 環境並 Clone 了專案，進入 `c:\git_work\worki\let`。
   - 執行部署腳本：
     ```powershell
     .\deploy_vps_let.ps1
     ```
   - 腳本會自動完成所有伺服器設定。

3. **Cloudflare 設定 (如尚未完成)**:
   - 確保 DNS 指向 `145.79.28.71` (Type A, Name: let)。
   - 建議暫時關閉 Proxy (橘色雲 -> 灰色雲) 直到 SSL 申請成功。

---
**備註**: `deploy_vps_let.ps1` 檔案已經在專案目錄中，您不需要重新建立。
