import React, { useState } from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Button from "../../../../components/ui/Button";
import toast from "react-hot-toast";
import ParkingHandler from "../../../../handlers/ParkingHandler"; 


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
  const paths = ["User", "Add new Parking Slot"];
  const Heading = ["Add new Parking Slot"];

  const { createParkingHandler } = ParkingHandler();
  const [formData, setFormData] = useState({
    parkingSlotName: "",
    parkingSlotType: "",
    parkingUsage: "",
    parkingCharge: "",
    chargeAmount: 0.0,
    unitName: "",
    vehicleType: "",
    vehicleNumber: "",
    bookingFrom: "",
    bookingTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitParking = async (e) => {
    e.preventDefault();

    try {
      await createParkingHandler(formData);
      setFormData({
        parkingSlotName: "",
        parkingSlotType: "",
        parkingUsage: "",
        parkingCharge: "",
        chargeAmount: 0.0,
        unitName: "",
        vehicleType: "",
        vehicleNumber: "",
        bookingFrom: "",
        bookingTo: "",
      });

      toast.success("Parking entry submitted successfully.");
    } catch (error) {
      toast.error("Error submitting Parking entry: " + error.message);
    }
  };

  return (
    <div className="px-5">
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
            name="parkingSlotName"
            value={formData.parkingSlotName}
            onChange={handleChange}
          />
          <Input
            label={<div>Parking Slot Allocation(Unit Number): </div>}
            type="text"
            placeholder={"Enter Parking Slot Allocation"}
            size={"lg"}
            name="unitName"
            value={formData.unitName}
            onChange={handleChange}
          />
          <Input
            label={<div>Add Vehicle Details :</div>}
            type="text"
            placeholder={"Enter Vehicle Type"}
            size={"lg"}
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-row pt-[10px] items-center gap-4">
          <div>Parking Slot Applicable:</div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input
                type="radio"
                name="parkingSlotType"
                value="PublicUsage"
                checked={formData.parkingSlotType === "PublicUsage"}
                onChange={handleChange}
              />
              <label className="text-lg">Public Usage</label>
            </div>
            <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input
                type="radio"
                name="parkingSlotType"
                value="PrivateUsage"
                checked={formData.parkingSlotType === "PrivateUsage"}
                onChange={handleChange}
              />
              <label>Private/ Restricted Usage</label>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row items-center gap-4 py-4">
          <div>Parking Usage :</div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input
                type="radio"
                name="parkingUsage"
                value="Free"
                checked={formData.parkingUsage === "Free"}
                onChange={handleChange}
                className="text-lg"
              />
              <label className="text-lg">Free</label>
            </div>
            <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input
                type="radio"
                name="parkingUsage"
                value="Paid"
                checked={formData.parkingUsage === "Paid"}
                onChange={handleChange}
              />
              <label>Paid</label>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 py-4">
          <div>Parking Slot Charge :</div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input
                type="radio"
                name="parkingCharge"
                value="Hourly"
                checked={formData.parkingCharge === "Hourly"}
                onChange={handleChange}
              />
              <label className="text-lg">Hourly</label>
            </div>
            <div className="flex flex-row items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input
                type="radio"
                name="parkingCharge"
                value="Days"
                checked={formData.parkingCharge === "Days"}
                onChange={handleChange}
              />
              <label>Days</label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 items-center py-4">
          <Input
            label={<div>Charge Amount: </div>}
            type="number"
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
          <Button className="max-w-sm" type="button" size="lg" onClick={handleSubmitParking}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
