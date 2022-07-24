# 餐廳清單
使用 Node.js + Express 打造的餐廳清單。

---
### Features -功能列表
- 使用者可以依照餐廳名稱及餐廳類別搜尋。
  - 如果搜尋不到餐廳，使用者可以點選`查看所有餐廳`返回首頁瀏覽全部餐廳資料。
- 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介。
- 使用者在`/restaurant/`網址後輸入不在餐廳清單中的id，畫面顯示餐廳不存在，使用者可以點選`查看所有餐廳`返回首頁瀏覽全部餐廳資料。

---
### Environment - 環境建置
1.nvm(Windows)

[nvm-windows](https://github.com/coreybutler/nvm-windows/releases)，點擊`nvm-setup.zip`下載安裝。開啟終端機(Terminal)，輸入下述指令以確定安裝成功。
```
nvm version
```

2.Node.js

開啟終端機(Terminal)，輸入下述指令查看可安裝的Node.js的版本。下載並使用Node.js，這裡下載16.16.0版本。
```
nvm list available
nvm install 16.16.0
nvm use 16.16.0
```

3.nodemon
```
npm install -g nodemon
```


---
### Installing - 專案建置
1.開啟終端機(Terminal)，Clone 此專案至本機電腦。
```
git clone https://github.com/b10332040/AC-restaurant-list.git
```

2.進入專案資料夾。
```
cd AC-restaurant-list
```

3.下載相關套件。
```
npm install
```

4.啟動伺服器，執行 app.js 檔案
```
npm run dev
```

5.當終端機(Terminal)出現以下字樣，表示伺服器已成功啟動。
```
Express is running on http://localhost:3000
```