import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = true; // Substitua pela lógica de autenticação real
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;