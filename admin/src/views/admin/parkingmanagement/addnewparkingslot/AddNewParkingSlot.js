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
  const paths = ["User", "Add New Parking Slot"];
  const heading = ["Add New Parking Slot"];

  const { createParkingHandler } = ParkingHandler() ;
  const { getUnitsHandler } = DefineUnitHandler() ;

  const [unitOptions, setUnitOptions] = useState([]);
  const [formData, setFormData] = useState({
    parkingSlotName: "",
    parkingSlotType: "",
    parkingUsage: "",
    parkingCharges: "",
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
  const handleRadioChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmitParking = async (e) => {
    e.preventDefault();

    try {
      await createParkingHandler(formData);
      setFormData({
        parkingSlotName: "",
        parkingSlotType: "",
        parkingUsage: "",
        parkingCharges: "",
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
      <div className="flex items-center gap-2 my-2 text-sm font-semibold text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={heading} />
      <div className="p-10 my-5 bg-gray-100 border rounded-lg">
        <div className="grid items-center grid-cols-1 gap-3 py-4">
          <Input
            label={<span>Parking Slot Name: <span className="text-red-500">*</span></span>}
            type="text"
            placeholder="Enter the Name"
            size="lg"
            name="parkingSlotName"
            value={formData.parkingSlotName}
            onChange={handleChange}
          />

          {/* Dropdown for unit selection */}
          <div >
            <label className="block mb-2 text-sm font-bold text-gray-700">Parking Slot Allocation (Unit Name): <span className="text-red-500">*</span></label>
            <select
              name="unitName"
              value={formData.unitName}
              onChange={handleChange}
              className="block w-full px-3 py-4 bg-white border rounded-sm"
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
          label={<span>Add Vehicle Details: <span className="text-red-500">*</span></span>}
          type="text"
          placeholder="Enter Vehicle Type"
          size="lg"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
        />
          <Input
          label={<span>Add Vehicle Number: <span className="text-red-500">*</span></span>}
          type="text"
          placeholder="Enter Vehicle Number"
          size="lg"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
        />

        <div className="flex flex-row items-center gap-4 pt-4">
          <div>Parking Slot Applicable: <span className="text-red-500">*</span></div>
          <div className="flex flex-row items-center gap-3">
            {["PublicUsage", "PrivateUsage"].map((type) => (
              <label key={type} className="flex items-center gap-3 px-4 py-1 bg-white border rounded-lg">
                <input type="radio" name="parkingSlotType" value={type} checked={formData.parkingSlotType === type} onChange={handleChange} />
                {type === "PublicUsage" ? "Public Usage" : "PrivateUsage"}
              </label>
            ))}
          </div>
        </div>

         <div className="flex flex-row items-center gap-4 py-4">
          <div>Parking Usage: <span className="text-red-500">*</span></div>
          <div className="flex flex-row items-center gap-3">
            {['Hourly','Days'].map((type) => (
              <label key={type} className="flex items-center gap-3 px-4 py-1 bg-white border rounded-lg">
                <input type="radio" name="parkingUsage" value={type} checked={formData.parkingUsage === type} onChange={handleChange} />
                {type === "Hourly" ? "Hourly" : "Days"}
              </label>
            ))}
          </div>
        </div>
      {/*  <div className="flex flex-row items-center gap-4 pt-4">
          <div>parkingCharge :</div>
          <div className="flex flex-row items-center gap-3">
            {['Hourly','Days'].map((type) => (
              <label key={type} className="flex items-center gap-3 px-4 py-1 bg-white border rounded-lg">
                <input type="radio" name="parkingCharge" value={type} checked={formData.parkingCharge === type} onChange={handleChange} />
                {type === "Hourly" ? "Hourly" : "Days"}
              </label>
            ))}
          </div>
        </div> */}
        {/* <Input
          label="Charge Amount:"
          type="number"
          placeholder="INR: Enter Amount"
          size="lg"
          name="chargeAmount"
          value={formData.chargeAmount}
          onChange={handleChange}
        /> */}

           <div className="flex flex-row items-center gap-4 py-4">
                    <div>Parking Charge: <span className="text-red-500">*</span></div>
                    <div className="flex flex-row items-center gap-3">
                      {["Free", "Paid"].map((charge) => (
                        <div key={charge} className="flex flex-row items-center gap-3 px-4 py-1 bg-white border rounded-lg">
                          <input
                            type="radio"
                            name="parkingCharges"
                            value={charge}
                            checked={formData.parkingCharges === charge}
                            onChange={() => handleRadioChange("parkingCharges", charge)}
                          />
                          <label className="text-lg">{charge}</label>
                        </div>
                      ))}
                    </div>
                  </div>
        
                  {/* Charge Amount (Visible Only When Paid is Selected) */}
                  {formData.parkingCharges === "Paid" && (
                    <div className="grid items-center grid-cols-1 gap-3 py-4">
                      <Input
                        label="Charge Amount"
                        type="text"
                        name="chargeAmount"
                        placeholder="INR : Enter Amount"
                        size="lg"
                        value={formData.chargeAmount}
                        onChange={handleChange}
                      />
                    </div>
                  )}
        


         <div className="flex flex-row items-center gap-3 py-4">
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