import { DashboardLayout } from "../../components/layouts";
import React from "react";

const HomeModule = () => {
  return (
    <>
      Home Module
      <DashboardLayout>
        <>This is a children</>
      </DashboardLayout>
    </>
  );
};

export default HomeModule;
