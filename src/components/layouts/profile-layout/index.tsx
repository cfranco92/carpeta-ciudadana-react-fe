import React, { ReactNode } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <>
      This is a profile layout
      <section>{children}</section>
    </>
  );
};

export default ProfileLayout;
