// src/authService.js
const authService = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    login: () => {
      localStorage.setItem('isAuthenticated', 'true');
      authService.isAuthenticated = true;
    },
    logout: () => {
      localStorage.setItem('isAuthenticated', 'false');
      authService.isAuthenticated = false;
    },
  };
  
  export default authService;
  