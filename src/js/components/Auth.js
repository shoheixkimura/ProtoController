import React, { useState } from 'react';
import { auth } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // ログイン
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // アカウント作成
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      let errorMessage = 'エラーが発生しました。もう一度お試しください。';
      
      // エラーメッセージの日本語化
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'メールアドレスの形式が正しくありません。';
          break;
        case 'auth/user-disabled':
          errorMessage = 'このアカウントは無効になっています。';
          break;
        case 'auth/user-not-found':
          errorMessage = 'アカウントが見つかりません。';
          break;
        case 'auth/wrong-password':
          errorMessage = 'パスワードが間違っています。';
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'このメールアドレスは既に使用されています。';
          break;
        case 'auth/weak-password':
          errorMessage = 'パスワードは6文字以上である必要があります。';
          break;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'ログイン' : 'アカウント作成'}</h2>
        
        {error && <div className="message message-error">{error}</div>}
        
        <form onSubmit={handleAuth}>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn btn-block" 
            disabled={loading}
          >
            {loading ? '処理中...' : isLogin ? 'ログイン' : 'アカウント作成'}
          </button>
        </form>
        
        <div className="auth-toggle">
          <a onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'アカウントを作成する' : 'ログインする'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Auth;
