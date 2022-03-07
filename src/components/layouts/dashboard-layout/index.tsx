import React, { ReactNode } from "react";

import { Link } from "react-router-dom";

interface DashboardLayoutProps {
  page: string;
  children: ReactNode;
}

const DashboardLayout = ({ page, children }: DashboardLayoutProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <aside style={{ width: "25vw", display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <h1>CARPETA CIUDADANA</h1>
        <Link to="/">Inicio</Link>
        <Link to="login">Login</Link>
      </aside>
      <section id={page} style={{ width: "75vw" }}>
        {children}
      </section>
    </div>
  );
};

export default DashboardLayout;
