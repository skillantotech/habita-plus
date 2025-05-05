
import React from "react";
import UrlPath from "../../../../../src/components/shared/UrlPath";
import PageHeading from "../../../../../src/components/shared/PageHeading";
import ComplainEntryForm from "./ComplainEntryForm";

const AddNewComplain = () => {
  const paths = ["Document Management", "Document List"];
  const Heading = ["Document List"];
  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      {/* <div className="text-2xl font-semibold text-lime mt-4">Add Unit</div> */}
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
    <ComplainEntryForm/>
      </div>
    </div>
  );
};

export default AddNewComplain;