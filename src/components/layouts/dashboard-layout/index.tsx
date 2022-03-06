import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <section>
        This is a dashboard layout
        {children}
      </section>
    </>
  );
};

export default DashboardLayout;
