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
   注意: `firebase.js` ファイルは機密情報を含むため、「.gitignore」に追加されています。リポジトリをクローンした場合は、`src/js/firebase.example.js` をコピーして `firebase.js` を作成し、実際の値を設定してください。

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

## セキュリティについて

### Firebase APIキーの保護

- FirebaseのAPIキーは、ブラウザクライアントで使用されるため、完全に秘密にすることはできません。
- しかし、Firebaseコンソールでセキュリティルールを設定し、認証されたユーザーのみが特定の操作を実行できるように制限することを強くお勧めします。
- Firebaseコンソールの「Authentication > Sign-in method」で、「承認済みドメイン」を設定して、特定のドメインからのリクエストのみを許可するようにしてください。

### Firebase認証の安全な使用

- パスワードの強度要件を設定することを検討してください。
- 本番環境では、メールアドレス確認を有効にすることを検討してください。
- ブルートフォース攻撃を防ぐために、ログイン試行回数の制限を設定してください。

### 環境変数の使用

本番環境では、Firebaseの設定情報を環境変数として管理することを検討してください。たとえば、`.env`ファイルを使用して、以下のように環境変数を設定できます：

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
...
```

そして、`firebase.js`ファイルを以下のように変更します：

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  ...
};
```

## ライセンス

MIT
