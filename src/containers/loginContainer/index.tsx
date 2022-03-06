import LoginModule from "../../modules/loginModule";
import React from "react";

const LoginContainer = () => {
  return (
    <>
      Login Container
      <LoginModule>
        <>This is a children</>
      </LoginModule>
    </>
  );
};

export default LoginContainer;
