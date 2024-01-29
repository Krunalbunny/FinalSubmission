import React from 'react';
import withAuth from './withAuth';
import authService from './authService';
import ShoppingMall from './ShoppingMall';

const Home = ({ isLoggedIn, login, logout }) => (
  <div>
    {isLoggedIn ? (
      <ShoppingMall logout={logout}/>
    ) : (<>
    <div style={{display:'flex',justifyContent:'center'}}> 
      <p>You are not logged in. <button onClick={login}>Login</button></p>
      </div>
      </>
    )}
    <div style={{display:'flex',justifyContent:'center'}}> 
    <p>Mock Backend Auth Status: {authService.isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
    </div>
  </div>
);

export default withAuth(Home);


