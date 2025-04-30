import React from "react";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import FacilityListTable from "./FacilityListTable";

const FacilityList = () => {
  const paths = ["Facility", "Facility List"];
  const Heading = ["Facility List"];
  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <FacilityListTable />
      </div>
    </div>
  );
};

export default FacilityList;
