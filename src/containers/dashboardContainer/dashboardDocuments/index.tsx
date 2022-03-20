import React from "react";

import { Box, Paper } from "@mui/material";

import { DashboardLayout } from "../../../components/layouts";
import EnhancedTable from "../../../components/tables/EnhancedTable";
import UploadDocuments from "./uploadDocuments";

function DashboardDocuments() {
  return (
    <DashboardLayout page="dashboard-documents-page">
      <Box sx={{ p: 8, display: "flex", flexDirection: "column" }}>
        <Paper variant="outlined" sx={{ mb: 4, p: 4 }} elevation={3}>
          <UploadDocuments />
        </Paper>
        <EnhancedTable />
      </Box>
    </DashboardLayout>
  );
}

export default DashboardDocuments;
