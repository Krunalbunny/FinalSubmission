import React, { useState, useEffect } from 'react';
import authService from './authService';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(authService.isAuthenticated);

    const login = () => {
      authService.login();
      setIsLoggedIn(true);
    };

    const logout = () => {
      authService.logout();
      setIsLoggedIn(false);
    };

    useEffect(() => {
      setIsLoggedIn(authService.isAuthenticated);
    }, [isLoggedIn]);

    return (
      <WrappedComponent
        isLoggedIn={isLoggedIn}
        login={login}
        logout={logout}
        {...props}
      />
    );
  };

  return WithAuth;
};

export default withAuth;
