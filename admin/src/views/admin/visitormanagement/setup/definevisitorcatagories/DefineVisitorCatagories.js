import React from "react";

import Button from "../../../../../components/ui/Button";
import Input from "../../../../../components/shared/Input";
import UrlPath from "../../../../../components/shared/UrlPath";
import PageHeading from "../../../../../components/shared/PageHeading";
import DefineTypeOfEntry from "./DefineTypeOfEntry";
import DefineTypeOfVisitor from "./DefineTypeOfVisitor";
import VisitorRelationship from "./VisitorRelationship";

const DefineVisitorCatagories = () => {
  const paths = ["Visitor Management", "Define Visitor Catagories"];
  const Heading = ["Define Visitor Catagories"];  

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
        <VisitorRelationship />
      </div>
    </div>
  );
};

export default DefineVisitorCatagories;
