import React from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Button from "../../../../components/ui/Button";

const AddNewBookingRequest = () => {
  return (
    <main>
      <form>
        <Addnewbookingfacilityrequest />
      </form>
    </main>
  );
};

export default AddNewBookingRequest;

const Addnewbookingfacilityrequest = () => {
  const paths = ["User", "Add new Booking Request"];
  const Heading = ["Add new Booking Request"];
  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="grid grid-cols-1 gap-3 items-center py-4">
          {/* select box */}
          <Input
            label={<div>Facility Name: </div>}
            type="text"
            placeholder={"Enter the Name"}
            size={"lg"}
          />
        </div>
        <div className="flex flex-row pt-[10px] items-center gap-4">
          <div>Facility Applicable:</div>
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
          <div>Facility Usage :</div>
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
        <div className="flex flex-row gap-3 items-center py-4">
          <div className="text-base ">Select Date And Time :</div>
          <Input
            label={<div>From</div>}
            type="date"
            // placeholder={"INR : Enter Amount"}
            size={"lg"}
          />
          <Input
            label={<div>To</div>}
            type="date"
            // placeholder={"INR : Enter Amount"}
            size={"lg"}
          />
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
