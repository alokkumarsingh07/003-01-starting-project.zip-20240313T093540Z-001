import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthProvider } from "./store";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeUserLoggegInInformation = localStorage.getItem("isLoggedIn");
    if (storeUserLoggegInInformation === "1") {
      setIsLoggedIn(true);
    }
  });

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AuthProvider
        value={{
          isLoggedIn,
        }}
      >
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
