import React from "react";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import DefineStructerForm from "./DefineStructerForm";

const DefineStructer = () => {
  const paths = ["user", "Define Structer"];
  const Heading = ["Define Structer"];
  return (
    <div className="px-5">
      <div>
        <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
          <UrlPath paths={paths} />
        </div>
        <PageHeading heading={Heading} />
      </div>
      <DefineStructerForm />
    </div>
  );
};

export default DefineStructer;
