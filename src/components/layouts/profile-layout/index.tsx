import React, { ReactNode } from "react";

import logo from "./../../../logo.svg";

interface ProfileLayoutProps {
  page: string;
  children: ReactNode;
}

const ProfileLayout = ({ page, children }: ProfileLayoutProps) => {
  return (
    <>
      <section>{children}</section>
    </>
  );
};

export default ProfileLayout;
