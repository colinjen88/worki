
# Deployment script for let.gowork.run
# Usage: .\deploy_vps_let.ps1
# Prerequisites:
# 1. SSH access to root@145.79.28.71 without password (using SSH keys) is recommended.
# 2. If password is required, you will be prompted multiple times.

$ErrorActionPreference = "Stop"
$ServerIP = "145.79.28.71"
$User = "root"
$SiteName = "let.gowork.run"
$RepoUrl = "https://github.com/colinjen88/worki.git"
$RemotePath = "/var/www/html/let"
$NginxConfigFile = "nginx_let.conf"
$RemoteNginxPath = "/etc/nginx/sites-available/$SiteName"
$Email = "flashjen@gmail.com"

# Nginx Configuration Content
$NginxConfigContent = @"
server {
    listen 80;
    server_name $SiteName;

    root $RemotePath/let;
    index index.html;

    location / {
        try_files `$uri `$uri/ =404;
    }
}
"@

# Helper function to execute remote commands
function Invoke-RemoteCommand {
    param([string]$Command)
    Write-Host "Element: Executing on $ServerIP > $Command" -ForegroundColor Cyan
    ssh -o StrictHostKeyChecking=no ${User}@${ServerIP} $Command
    if ($LASTEXITCODE -ne 0) {
        throw "Remote command failed with exit code $LASTEXITCODE"
    }
}

try {
    Write-Host "Starting deployment for $SiteName..." -ForegroundColor Green

    # 1. Create Nginx config file locally
    Write-Host "Creating local Nginx config..."
    Set-Content -Path $NginxConfigFile -Value $NginxConfigContent -Encoding UTF8

    # 2. Check/Install Dependencies (Nginx, Git, Certbot)
    Write-Host "Checking server dependencies..."
    Invoke-RemoteCommand "apt-get update && apt-get install -y nginx git certbot python3-certbot-nginx"

    # 3. Clone or Pull Repository
    Write-Host "Updating repository..."
    # If directory exists, pull; otherwise clone
    Invoke-RemoteCommand "if [ -d $RemotePath ]; then cd $RemotePath && git pull origin master; else git clone $RepoUrl $RemotePath; fi"

    # 4. Upload Nginx Config
    Write-Host "Uploading Nginx configuration..."
    scp -o StrictHostKeyChecking=no $NginxConfigFile "${User}@${ServerIP}:${RemoteNginxPath}"

    # 5. Enable Site & Restart Nginx
    Write-Host "Enabling site and restarting Nginx..."
    Invoke-RemoteCommand "ln -sf $RemoteNginxPath /etc/nginx/sites-enabled/ && rm -f /etc/nginx/sites-enabled/default && nginx -t && systemctl reload nginx"

    # 6. SSL Certificate (Certbot)
    Write-Host "Setting up SSL with Certbot..."
    # Check if certificate exists to prevent rate limiting
    Invoke-RemoteCommand "if [ ! -d /etc/letsencrypt/live/$SiteName ]; then certbot --nginx -d $SiteName --non-interactive --agree-tos -m $Email; else echo 'SSL Certificate already exists.'; fi"

    Write-Host "Deployment Successfully Completed!" -ForegroundColor Green
    Write-Host "Website is live at: https://$SiteName" -ForegroundColor Green
}
catch {
    Write-Error "Deployment Failed: $_"
    exit 1
}
