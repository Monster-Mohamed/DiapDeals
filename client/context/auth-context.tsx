import React, { useState } from 'react';
import { Children } from '../components/types/Children.type';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (data: any) => {},
  logout: () => {},
});

export const AuthProvider = (props: Children) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (data: any) => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
