import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/shared/Input";
import FacilityHandler from "../../../../handlers/FacilityHandler";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";

const AddNewFacilityForm = () => {
  const paths = ["User", "Add new Facility"];
  const Heading = ["Add new Facility"];

  const { createFacilityHandler } = FacilityHandler();
  const [formData, setFormData] = useState({
  chargeAmount: 0.0,
  facilityName: "",
  facilityType: "",
  facilityUsage: "",
  facilityCharge: "",
  bookingTo: "",
  bookingFrom: "",

 });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmitFacility = async (e) => {
  e.preventDefault();

  try {
    await createFacilityHandler(formData);
    setFormData({
      facilityName: "",
      facilityType: "",
      facilityUsage: "",
      facilityCharge: "",
      chargeAmount: 0.0,
      bookingTo: "",
      bookingFrom: "",
    });

    toast.error("Facility entry submitted successfully.");
  } catch (error) {
    toast.error("Error submitting Facility entry:", error.message);
  }
};
  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <form >
          <div className="grid grid-cols-1 gap-3 items-center py-4">
            <Input
              label={<div>Facility Name: </div>}
              type="text"
              placeholder={"Enter the Name"}
              size={"lg"}
              name="facilityName"
              value={formData.facilityName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row pt-[10px] items-center gap-4">
            <div>Facility Applicable:</div>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
                <input
                  type="radio"
                  name="facilityType"
                  value="PublicUsage"
                  checked={formData.facilityType === "PublicUsage"}
                  onChange={handleChange}
                />
                <label className="text-lg">Public Usage</label>
              </div>
              <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
                <input
                  type="radio"
                  name="facilityType"
                  value="PrivateUsage"
                  checked={formData.facilityType === "PrivateUsage"}
                  onChange={handleChange}
                />
                <label>Private/ Restricted Usage</label>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 py-4">
            <div>Facility Charge:</div>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
                <input
                  type="radio"
                  name="facilityCharge"
                  value="Free"
                  checked={formData.facilityCharge === "Free"}
                  onChange={handleChange}
                />
                <label className="text-lg">Free</label>
              </div>
              <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
                <input
                  type="radio"
                  name="facilityCharge"
                  value="Paid"
                  checked={formData.facilityCharge  === "Paid"}
                  onChange={handleChange}
                />
                <label>Paid</label>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 py-4">
            <div>Facility Usage:</div>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
                <input
                  type="radio"
                  name="facilityUsage"
                  value="Hourly"
                  checked={formData.facilityUsage === "Hourly"}
                  onChange={handleChange}
                />
                <label className="text-lg">Hourly</label>
              </div>
              <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
                <input
                  type="radio"
                  name="facilityUsage"
                  value="Days"
                  checked={formData.facilityUsage === "Days"}
                  onChange={handleChange}
                />
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
              name="chargeAmount"
              value={formData.chargeAmount}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 items-center py-4">
            <Input
              label={<div>Booking From <span className="text-red-500">*</span></div>}
              type="date"
              size="lg"
              name="bookingFrom"
              value={formData.bookingFrom}
              onChange={handleChange}
            />
            <Input
              label={<div>Booking To<span className="text-red-500">*</span></div>}
              type="date"
              size="lg"
              name="bookingTo"
              value={formData.bookingTo}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-5">
           <Button className="max-w-sm" type="button" size="lg" onClick={handleSubmitFacility}>
  Submit
</Button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewFacilityForm;
