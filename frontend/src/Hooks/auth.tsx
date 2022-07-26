import React, { useState } from "react";

export type AuthContextShape = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
};
  
export interface authProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<authProps> = props => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = () => {
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


export const AuthContext = React.createContext({} as AuthContextShape);