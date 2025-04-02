/**
 * ユーザー定義のURL設定
 * 実際に使用するURLをここに設定します
 */

// URLボタン用のデータ
// name: ボタンに表示する名前
// url: 送信するURL
// icon: アイコン名（Material Icons から選択可能）
export const userDefinedUrls = [
  // 以下はサンプルです。実際のURLに置き換えてください
  { 
    id: 1, 
    name: 'ホーム画面', 
    url: 'https://example.com/home',
    icon: 'home'
  },
  { 
    id: 2, 
    name: 'ダッシュボード', 
    url: 'https://example.com/dashboard',
    icon: 'dashboard'
  },
  { 
    id: 3, 
    name: 'プロフィール', 
    url: 'https://example.com/profile',
    icon: 'person'
  },
  { 
    id: 4, 
    name: '設定画面', 
    url: 'https://example.com/settings',
    icon: 'settings'
  },
  { 
    id: 5, 
    name: '分析ページ', 
    url: 'https://example.com/analytics',
    icon: 'analytics'
  },
  { 
    id: 6, 
    name: 'ヘルプ', 
    url: 'https://example.com/help',
    icon: 'help'
  }
];

// 送信先のWebサイトのURL
// 実際の送信先URLに置き換えてください
export const targetWebsiteUrl = 'https://example.com/send-url';

// Webサイトへの送信方法の設定
// method: 'POST' または 'GET'
// paramName: URLを送信するときのパラメータ名
export const sendConfig = {
  method: 'POST',
  paramName: 'url'
};
