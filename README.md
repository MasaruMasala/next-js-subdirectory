# next-js-subdirectory
Next.jsがサブディレクトリで動作することを確認する。

## Usage
試験環境  
 ```bash
 NEXT_APP_ENV=development docker-compose up -d
 ```
本番環境  
 ```bash
 NEXT_APP_ENV=production docker-compose up -d
 ```
アクセス確認  
http://localhost/index.html  
http://localhost/subdirectory/  

## Requirement
Docker,docker-compose
