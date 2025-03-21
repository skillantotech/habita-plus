import React from "react";
import VisitorListTable from "./VisitorListTable";
// import UrlPath from "../../../../../components/shared/UrlPath";
// import PageHeading from "../../../../../components/shared/PageHeading";
import UrlPath from "../../../../../src/components/shared/UrlPath";
import PageHeading from "../../../../../src/components/shared/PageHeading";

const VisitorList = () => {
  const paths = ["Visitors Management", "Visitor List"];
  const Heading = ["Visitor List"];
  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      {/* <div className="text-2xl font-semibold text-lime mt-4">Add Unit</div> */}
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        {/* <DefineTypeOfEntry />
      <DefineTypeOfVisitor /> */}
        <VisitorListTable />
      </div>
    </div>
  );
};

export default VisitorList;
