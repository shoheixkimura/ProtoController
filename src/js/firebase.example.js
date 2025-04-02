import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebaseの設定
// 注: 実際の値はFirebaseコンソールから取得した値に置き換えてください
// このファイルはテンプレートであり、実際の値は入力せずにコミットしてください
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
  // Google Analyticsを使用する場合は以下も追加
  // measurementId: "YOUR_MEASUREMENT_ID"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
