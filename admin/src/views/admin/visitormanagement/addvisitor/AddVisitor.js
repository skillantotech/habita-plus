import React from "react";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Input from "../../../../components/shared/Input";
import Button from "../../../../components/ui/Button";
import AddVisitorForm from "./AddVisitorForm";

const AddVisitor = () => {
  const paths = ["User", "New Visitor Entry"];
  const Heading = ["New Visitor Entry"];
  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <AddVisitorForm />
      {/* <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="grid grid-cols-3 gap-5 items-center py-6">
          <Input
            label={<div>Date of Entry</div>}
            type="date"
            placeholder={"Date of Entry"}
            size={"lg"}
          />
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Type Of Visitor
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select type of Visitor</option>
              <option value="US">Recurring</option>
              <option value="CA">One Time</option>
            </select>
          </div>
          <Input
            label={<div> Name of Visitor</div>}
            type="text"
            placeholder={"Enter Name of Visitor"}
            size={"lg"}
          />
          <Input
            label={<div>Visitor Mobile No.</div>}
            type="number"
            placeholder={"Enter Visitor Mobile No."}
            size={"lg"}
          />
          <Input
            label={<div>Relationship</div>}
            type="text"
            placeholder={"Enter Your Relationship with Visitor"}
            size={"lg"}
          />
          <Input
            label={<div>Porpous of Visit</div>}
            type="text"
            placeholder={"Enter Your Porpous of Visit"}
            size={"lg"}
          />
          <Input label={<div>Valid Till Date</div>} type="date" size={"lg"} />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <Button className="max-w-sm" type="submit" size="lg">
          Submit
        </Button>
      </div> */}
    </div>
  );
};

export default AddVisitor;
