import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import DashboardLeftContents from "../dashboard/DashboardLeftContents";

const Vendor = () => {
  return (
    <main>
      <DashboardLayout
        header={<DashboardHeader />}
        leftContent={<DashboardLeftContents />}
        rightContent={
          <React.Fragment>
            <div>Vendors List</div>
          </React.Fragment>
        }
      />
    </main>
  );
};

export default Vendor;
