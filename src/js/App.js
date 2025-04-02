import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '50px' }}>
        <p>読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="container">
      {user ? <Dashboard user={user} /> : <Auth />}
    </div>
  );
}

export default App;
