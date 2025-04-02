/**
 * 指定されたURLを対象のWebサイトに送信するユーティリティ関数
 * 実際の送信先Webサイトの仕様に合わせて実装を変更してください
 */

import { targetWebsiteUrl, sendConfig } from '../config/urls';

/**
 * URLを送信する関数
 * @param {string} url - 送信するURL
 * @returns {Promise<Object>} レスポンスオブジェクト
 */
export const sendUrlToWebsite = async (url) => {
  try {
    // 実際の送信先Webサイトの仕様に合わせてリクエストを構築します
    const requestOptions = {
      method: sendConfig.method,
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    // GETリクエストの場合はクエリパラメータ、POSTの場合はbodyに追加
    let finalUrl = targetWebsiteUrl;
    if (sendConfig.method === 'GET') {
      const params = new URLSearchParams();
      params.append(sendConfig.paramName, url);
      finalUrl = `${targetWebsiteUrl}?${params.toString()}`;
    } else {
      // POST, PUTなどの場合
      const body = {};
      body[sendConfig.paramName] = url;
      requestOptions.body = JSON.stringify(body);
    }
    
    const response = await fetch(finalUrl, requestOptions);
    
    if (!response.ok) {
      throw new Error(`サーバーエラー: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('URL送信エラー:', error);
    throw error;
  }
};

/**
 * 指定されたURLを新しいウィンドウでテスト的に開く関数
 * （Google検索用に修正）
 * @param {string} query - 検索クエリ
 */
export const openUrlInNewWindow = (query) => {
  // Google検索URLを作成
  const params = new URLSearchParams();
  params.append('q', query);
  const googleSearchUrl = `${targetWebsiteUrl}?${params.toString()}`;
  
  // 新しいタブで開く
  window.open(googleSearchUrl, '_blank');
};
