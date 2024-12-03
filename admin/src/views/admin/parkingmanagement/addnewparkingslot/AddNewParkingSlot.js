import React from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Button from "../../../../components/ui/Button";

const AddNewParkingSlot = () => {
  return (
    <main>
      <form>
        <Addnewparkingslotform />
      </form>
    </main>
  );
};

export default AddNewParkingSlot;

const Addnewparkingslotform = () => {
  const paths = ["Parking Management", "Add new Parking Slot"];
  const Heading = ["Add new Parking Slot"];
  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="grid grid-cols-1 gap-3 items-center py-4">
          <Input
            label={<div>Parking Slot Name: </div>}
            type="text"
            placeholder={"Enter the Name"}
            size={"lg"}
          />
          <Input
            label={<div>Parking Slot Allocation(Unit Number): </div>}
            type="text"
            placeholder={"Enter Parking Slot Allocation"}
            size={"lg"}
          />
          <Input
            label={<div>Add Vechicle Details :</div>}
            type="text"
            placeholder={"Enter Parking Slot Allocation"}
            size={"lg"}
          />
        </div>
        <div className="flex flex-row pt-[10px] items-center gap-4">
          <div>Parking Slot Applicable:</div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="drone" checked className="text-lg" />

              <label className="text-lg">Public Usage</label>
            </div>
            <div className=" flex flex-row items-center gap-3  px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="drone" checked />

              <label>Private/ Restricted Usage</label>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 py-4">
          <div>Parking Usage :</div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3  px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="drone" checked className="text-lg" />

              <label className="text-lg">Free</label>
            </div>
            <div className=" flex flex-row items-center gap-3  px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="drone" checked />

              <label>Paid</label>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 py-4">
          <div>Parking Slot Charge :</div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3  px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="drone" checked className="text-lg" />

              <label className="text-lg">Hourly</label>
            </div>
            <div className=" flex flex-row items-center gap-3  px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="drone" checked />

              <label>Days</label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 items-center py-4">
          <Input
            label={<div>Charge Amount: </div>}
            type="text"
            placeholder={"INR : Enter Amount"}
            size={"lg"}
          />
        </div>
      </div>

      {/* <div className="p-10 my-5 border rounded-lg bg-gray-100">
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
      </div> */}

      <div className="flex justify-center mt-5">
        <Button className="max-w-sm" type="submit" size="lg">
          Submit
        </Button>
      </div>
    </div>
  );
};
