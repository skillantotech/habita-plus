import React from "react";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Input from "../../../../components/shared/Input";
import Button from "../../../../components/ui/Button";

const AddVechicleDetails = () => {
  const paths = ["Parking Management", "Add Vechicle"];
  const Heading = ["Add Vechicle"];
  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />

      <AddVechicle />
    </div>
  );
};

export default AddVechicleDetails;

const AddVechicle = () => {
  return (
    <div className="p-10 my-5 border rounded-lg bg-gray-100">
      <div className="text-xl font-sans font-semibold text-lime">
        Add Vechicle Details
      </div>
      <div className="grid grid-cols-3 gap-3 items-center py-4">
        <Input
          label={<div>Vechicle Number: </div>}
          type="text"
          placeholder={"Enter Vechicle Number"}
          size={"lg"}
        />
        <Input
          label={<div>Vechicle Type :</div>}
          type="text"
          placeholder={"Enter Vechicle Type"}
          size={"lg"}
        />
        <Input
          label={<div>Add Vechicle Model Type :</div>}
          type="text"
          placeholder={"Enter Parking Slot Allocation"}
          size={"lg"}
        />
        <Input
          label={<div>Add Engine Type :</div>}
          type="text"
          placeholder={"Enter Parking Slot Allocation"}
          size={"lg"}
        />
        <Input
          label={<div>Add Tchechis No :</div>}
          type="text"
          placeholder={"Enter Tchechis No"}
          size={"lg"}
        />
        <div className="flex flex-row pt-[10px] items-center gap-4">
          <div>FASTag Enable:</div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="drone" checked className="text-lg" />

              <label className="text-lg">Yes</label>
            </div>
            <div className=" flex flex-row items-center gap-3  px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="drone" checked />
              <label>No</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button className="max-w-sm" type="submit" size="lg">
          Submit
        </Button>
      </div>
    </div>
  );
};
