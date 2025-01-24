import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardHeader from "../dashboard/DashboardHeader";
import DashboardLeftContents from "../dashboard/DashboardLeftContents";

const Tenant = () => {
  return (
    <main>
      {" "}
      <DashboardLayout
        header={<DashboardHeader />}
        leftContent={<DashboardLeftContents />}
        rightContent={<React.Fragment>Tenant list</React.Fragment>}
      />
    </main>
  );
};

export default Tenant;
