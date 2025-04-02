import React, { useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import UrlButton from './UrlButton';
import { sendUrlToWebsite, openUrlInNewWindow } from '../utils/urlSender';
import { userDefinedUrls, targetWebsiteUrl, sendConfig } from '../config/urls';

// URLs are imported from config/urls.js

function Dashboard({ user }) {
  const [message, setMessage] = useState(null);
  
  // URLを送信する関数
  const sendUrl = async (url) => {
    try {
      // テスト環境用：新しいウィンドウでGoogle検索を開く
      openUrlInNewWindow(url);
      
      console.log(`URLを送信: ${url}`);
      
      // 成功メッセージを表示
      setMessage({
        text: `検索を開きました: ${url}`,
        type: 'success'
      });
      
      // 一定時間後にメッセージを消す
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } catch (error) {
      // エラーメッセージを表示
      setMessage({
        text: `エラーが発生しました: ${error.message}`,
        type: 'error'
      });
      
      // 一定時間後にメッセージを消す
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };
  
  // ログアウト処理
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  return (
    <div>
      <div className="header">
        <h1>URLリモコン</h1>
        <button onClick={handleLogout} className="btn btn-secondary">
          ログアウト
        </button>
      </div>
      
      {message && (
        <div className={`message message-${message.type}`}>
          {message.text}
        </div>
      )}
      
      <div className="button-grid">
        {userDefinedUrls.map(item => (
          <UrlButton
            key={item.id}
            name={item.name}
            url={item.url}
            icon={item.icon}
            onSend={() => sendUrl(item.url)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
