import React from "react";

import { Route, Routes } from "react-router-dom";

import DashboardDocuments from "./dashboardDocuments";
import DashboardHome from "./dashboardHome";

const DashboardContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="documents" element={<DashboardDocuments />} />
    </Routes>
  );
};

export default DashboardContainer;
