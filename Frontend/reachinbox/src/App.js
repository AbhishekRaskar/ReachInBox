import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import GmailLandingPage from './Pages/Login';

function App() {
  const [urlToken, setUrlToken] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setUrlToken(token);
    }
  }, []);



  console.log("urlToken", urlToken);


  JSON.stringify(localStorage.setItem("Token", urlToken))

  
  return (
    <div className="App">
      {!urlToken ? <GmailLandingPage /> : <Home />}
    </div>
  );
}

export default App;
