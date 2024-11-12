import React from 'react';

interface IAuthLayout {
  children: React.ReactNode;
}
const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <>
      <h1>AuthLayout</h1>
      {children}
    </>
  );
};

export default AuthLayout;
