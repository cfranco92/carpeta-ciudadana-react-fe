import React, { useCallback, useEffect } from "react";

import { DashboardLayout } from "../../../components/layouts";
import { usersApi } from "../../../services/users";

function DashboardHome() {
  const [fetchUser] = usersApi.endpoints.fetchUser.useLazyQuery();

  const handleGetUser = useCallback(async () => {
    // TODO: Get UID from account slice
    const uid = "1412342423";
    const userResponse = await fetchUser({ uid: uid });
    // TODO: Save user in account slice
  }, [fetchUser]);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  return (
    <DashboardLayout page="dashboard-page">Dashboard home page</DashboardLayout>
  );
}

export default DashboardHome;
