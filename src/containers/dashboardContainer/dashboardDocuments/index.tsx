import React from "react";
import { Box } from "@mui/material";
import { DashboardLayout } from "../../../components/layouts";
import StickyHeadTable from "../../../components/tables/StickyHeadTable";

function DashboardDocuments() {
  return (
    <DashboardLayout page="dashboard-documents-page">
      <Box sx={{ p: 8, display: "flex", flexDirection: "row" }}>
        <StickyHeadTable />
      </Box>
    </DashboardLayout>
  );
}

export default DashboardDocuments;
