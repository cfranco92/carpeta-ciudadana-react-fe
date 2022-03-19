import { Box, Paper } from "@mui/material";

import { DashboardLayout } from "../../../components/layouts";
import React from "react";
import StickyHeadTable from "../../../components/tables/StickyHeadTable";
import UploadDocuments from "./uploadDocuments";

function DashboardDocuments() {
  return (
    <DashboardLayout page="dashboard-documents-page">
      <Box sx={{ p: 8, display: "flex", flexDirection: "column" }}>
        <Paper variant="outlined" sx={{ mb: 4, p: 4 }} elevation={3}>
          <UploadDocuments />
        </Paper>
        <StickyHeadTable />
      </Box>
    </DashboardLayout>
  );
}

export default DashboardDocuments;
