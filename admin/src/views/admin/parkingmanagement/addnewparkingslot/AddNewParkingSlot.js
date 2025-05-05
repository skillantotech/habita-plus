import React, { useState, useEffect } from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Button from "../../../../components/ui/Button";
import toast from "react-hot-toast";
import ParkingHandler from "../../../../handlers/ParkingHandler";
import DefineUnitHandler from "../../../../handlers/DefineUnitHandler";

const AddNewParkingSlot = () => {
  return (
    <main>
      <form>
        <AddNewParkingSlotForm />
      </form>
    </main>
  );
};

export default AddNewParkingSlot;

const AddNewParkingSlotForm = () => {
  const paths = ["Parking Management", "Add New Parking Slot"];
  const heading = ["Add New Parking Slot"];

  const { createParkingHandler } = ParkingHandler() ;
  const { getUnitsHandler } = DefineUnitHandler() ;

  const [unitOptions, setUnitOptions] = useState([]);
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

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await getUnitsHandler();
        console.log("Unit API Response:", response);
        if (response?.data && Array.isArray(response.data)) {
          setUnitOptions(response.data);
        }
      } catch (error) {
        console.error("Error fetching unit types:", error);
      }
    };
    fetchUnits();
  }, []); // Empty dependency array to run only once
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "chargeAmount" ? parseFloat(value) || 0 : value,
    }));
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
      <PageHeading heading={heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="grid grid-cols-1 gap-3 items-center py-4">
          <Input
            label="Parking Slot Name:"
            type="text"
            placeholder="Enter the Name"
            size="lg"
            name="parkingSlotName"
            value={formData.parkingSlotName}
            onChange={handleChange}
          />

          {/* Dropdown for unit selection */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Parking Slot Allocation (Unit Name):</label>
            <select
              name="unitName"
              value={formData.unitName}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-lg bg-white"
            >
              <option value="">Select a Unit</option>
              {unitOptions.length > 0 ? (
                unitOptions.map((unit) => (
                  <option key={unit.unitId} value={unit.unitName}>
                    {unit.unitName}
                  </option>
                ))
              ) : (
                <option disabled>Loading units...</option>
              )}
            </select>
          </div>
        </div>

        <Input
          label="Add Vehicle Details:"
          type="text"
          placeholder="Enter Vehicle Type"
          size="lg"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
        />
          <Input
          label="Add Vehicle Number:"
          type="text"
          placeholder="Enter Vehicle Number"
          size="lg"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
        />

        <div className="flex flex-row pt-4 items-center gap-4">
          <div>Parking Slot Applicable:</div>
          <div className="flex flex-row items-center gap-3">
            {["PublicUsage", "PrivateUsage"].map((type) => (
              <label key={type} className="flex items-center gap-3 px-4 py-1 rounded-lg border bg-white">
                <input type="radio" name="parkingSlotType" value={type} checked={formData.parkingSlotType === type} onChange={handleChange} />
                {type === "PublicUsage" ? "Public Usage" : "Private/Restricted Usage"}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 py-4">
          <div>Parking Usage:</div>
          {["Free", "Paid"].map((usage) => (
            <label key={usage} className="flex items-center gap-3 px-4 py-1 rounded-lg border bg-white">
              <input type="radio" name="parkingUsage" value={usage} checked={formData.parkingUsage === usage} onChange={handleChange} />
              {usage}
            </label>
          ))}
        </div>
        <div className="flex flex-row pt-4 items-center gap-4">
          <div>parkingCharge :</div>
          <div className="flex flex-row items-center gap-3">
            {['Hourly','Days'].map((type) => (
              <label key={type} className="flex items-center gap-3 px-4 py-1 rounded-lg border bg-white">
                <input type="radio" name="parkingCharge" value={type} checked={formData.parkingCharge === type} onChange={handleChange} />
                {type === "Hourly" ? "Hourly" : "Days"}
              </label>
            ))}
          </div>
        </div>
        <Input
          label="Charge Amount:"
          type="number"
          placeholder="INR: Enter Amount"
          size="lg"
          name="chargeAmount"
          value={formData.chargeAmount}
          onChange={handleChange}
        />


         <div className="flex flex-row gap-3 items-center py-4">
                          <div className="text-base ">Select Date And Time :</div>
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
          <Button className="max-w-sm" type="submit" size="lg" onClick={handleSubmitParking}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
