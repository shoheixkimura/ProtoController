# ProtoController

URLリモコンウェブアプリケーション

## 概要

ProtoControllerは、登録済みのURLを簡単なボタン操作で送信できるウェブアプリケーションです。スマートフォンやタブレットからアクセスして、リモコンのように使用できます。

## 機能

- Firebaseによる認証（ログイン/アカウント作成）
- URLボタンによるリモート操作
- レスポンシブデザイン（スマートフォン・タブレット・PC対応）
- PWA対応（ホーム画面に追加可能）

## 技術スタック

- React.js
- Firebase Authentication
- Webpack
- CSS3 (レスポンシブデザイン)
- Material Icons

## セットアップ方法

### 前提条件

- Node.js (v14以上)
- npm または yarn

### インストール

1. リポジトリをクローンまたはダウンロードします
   ```
   git clone https://github.com/yourusername/ProtoController.git
   cd ProtoController
   ```

2. 依存パッケージをインストールします
   ```
   npm install
   ```
   または
   ```
   yarn install
   ```

3. Firebaseプロジェクトを作成し、認証設定を行います
   - [Firebase Console](https://console.firebase.google.com/) にアクセス
   - 新しいプロジェクトを作成
   - Authentication > Sign-in method から「メール/パスワード」を有効化
   - プロジェクト設定からウェブアプリを追加し、Firebaseの設定情報を取得

4. Firebaseの設定情報を `src/js/firebase.js` に記述します
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

5. URLを設定します
   - `src/js/config/urls.js` 内の `userDefinedUrls` を編集して、使用したいURLを設定します
   - `targetWebsiteUrl` に送信先のウェブサイトのURLを設定します
   - `sendConfig` でリクエスト方法を設定します

### 開発サーバー起動

```
npm start
```
または
```
yarn start
```

ブラウザで http://localhost:3000 にアクセスするとアプリケーションが表示されます。

### ビルド

```
npm run build
```
または
```
yarn build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## デプロイ方法

1. ビルドしたファイルを静的ホスティングサービス（GitHub Pages, Netlify, Vercelなど）にデプロイします

2. Firebase Hosting を使用する場合:
   ```
   npm install -g firebase-tools
   firebase login
   firebase init
   firebase deploy
   ```

## カスタマイズ

### URLの編集

`src/js/config/urls.js` ファイルを編集して、ボタンに表示するURLを設定します。

```javascript
export const userDefinedUrls = [
  { 
    id: 1, 
    name: 'ボタン名',
    url: 'https://example.com/your-url',
    icon: 'home' // Material Icons から選択
  },
  // ...他のURLボタン
];
```

### スタイルのカスタマイズ

`src/css/index.css` を編集してスタイルをカスタマイズできます。

## ライセンス

MIT
