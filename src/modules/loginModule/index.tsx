import React, { ReactNode } from "react";

interface LoginModuleProps {
  children: ReactNode;
}

const LoginModule = ({ children }: LoginModuleProps) => {
  return (
    <>
      Login Module
      {children}
    </>
  );
};

export default LoginModule;
