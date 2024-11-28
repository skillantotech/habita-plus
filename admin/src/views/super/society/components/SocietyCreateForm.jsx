import React, { useState } from "react";
import Input from "../../../../components/shared/Input";
import Select from "../../../../components/ui/Select";
import Button from "../../../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerFormField } from "../../../../redux/slices/customerSlice";

const SocietyCreateForm = ({ onSubmit, onEditHandler }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.customer.customerForm);
  const societyTypeOptions = useSelector(
    (state) => state.customer.societyTypeOptions
  );
  const subscriptionPlans = useSelector(
    (state) => state.customer.subscriptionPlans
  );
  const customerTypeOptions = useSelector(
    (state) => state.customer.customerTypeOptions
  );
  const formMode = useSelector((state) => state.customer.formOperationType);

  const [errors, setErrors] = useState({});

  // Helper to check if the field should be readonly
  const isReadOnly = (fieldMode) => formMode === "view" || fieldMode === "view";

 
  const handleInputChange = (e) => {
  const { name, value } = e.target;
  let error = "";

  // Field-specific validation
  if (
    ["customerName", "builderName", "state", "city"].includes(name) &&
    !/^[A-Za-z\s]*$/.test(value)
  ) {
    error = "Only alphabetic characters are allowed";
  }

  if (name === "zipCode" && !/^\d{0,6}$/.test(value)) {
    error = "ZIP Code must be exactly 6 digits";
  }

  if (name === "phone" && !/^\d{0,10}$/.test(value)) {
    error = "Phone no must be exactly 10 digits";
  }


  if (name === "establishedYear") {
    // Extract only the year from the date input (value format: YYYY-MM-DD)
    const year = value.split("-")[0]; // Extract the year part
    dispatch(setCustomerFormField({ name, value: year }));
  } else {
    dispatch(setCustomerFormField({ name, value }));
  }

  if (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
      return; // Prevent invalid updates
    }

    // // Clear error and update field value
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    dispatch(setCustomerFormField({ name, value }));
 
  

  // Set error if validation fails
  setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
};


  return (
    <div className="flex">
      <div className="w-full space-y-5">
        {/* Customer Info */}
        <div className="p-5 bg-white border border-gray-100 rounded-2xl">
          <h3 className="font-semibold text-lime">Customer Info</h3>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input
              label={<><span>Customer Name</span><span className="text-red-500 font-bold">*</span></>} 
              type="text"
              placeholder="Enter customer name"
              size="lg"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
              error={errors.customerName}
            />
            <Select
              label={<><span>Select Customer Type</span><span className="text-red-500 font-bold">*</span></>} 
              options={customerTypeOptions}
              value={formData.customerType}
              onChange={handleInputChange}
              name="customerType"
              color="blue"
              size="md"
              className="py-[14px]"
              readOnly={isReadOnly()}
            />
            <Select
              label={<><span>Select Subscription Plan</span><span className="text-red-500 font-bold">*</span></>} 
              options={subscriptionPlans}
              value={formData.subscriptionId}
              onChange={handleInputChange}
              name="subscriptionId"
              color="blue"
              size="md"
              className="py-[14px]"
              readOnly={isReadOnly()}
            />
            <Input
              label={<><span>Established Year</span><span className="text-red-500 font-bold">*</span></>} 
              // type="number"
              // placeholder="Enter year"
              // size="lg"
              // name="establishedYear"
              // value={formData.establishedYear}
              // onChange={handleInputChange}
              // readOnly={isReadOnly()}
              type="number"
              placeholder="Enter establishment year"
              size="lg"
              name="establishedYear"
              value={formData.establishedYear}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
              error={errors.establishedYear}
              min="1990-01-01"  // Set minimum date (January 1st, 1990)
              max={`${new Date().getFullYear()}-12-31`}  // Set maximum date (December 31st of the current year)
            />
          
           
            {formData.customerType === "society" && (
              <Select
                label={<><span>Select Society Type</span><span className="text-red-500 font-bold">*</span></>} 
                options={societyTypeOptions}
                value={formData.societyType}
                onChange={handleInputChange}
                name="societyType"
                color="blue"
                size="md"
                className="py-[14px]"
                readOnly={isReadOnly()}
              />
            )}
          </div>
        </div>

        {/* Builder Info */}
        <div className="p-5 bg-white border border-gray-100 rounded-2xl">
          <h3 className="font-semibold text-lime">Builder Info</h3>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input
              label="Builder Name"
              type="text"
              placeholder="Enter Builder name"
              size="lg"
              name="builderName"
              value={formData.builderName}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
              error={errors.builderName}
            />
            <Input
              label="Builder Details"
              type="text"
              placeholder="Enter Builder Social Link"
              size="lg"
              name="builderSocialLink"
              value={formData.builderSocialLink}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
            />
          </div>
        </div>

        {/* Address Info */}
        <div className="p-5 bg-white border border-gray-100 rounded-2xl">
          <h3 className="font-semibold text-lime">
            Society Location / Address
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input 
              label={<><span>Address Line 1</span><span className="text-red-500 font-bold">*</span></>} 
              type="text"
              placeholder="Enter address line 1"
              size="lg"
              name="address1"
              value={formData.address.address1}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
            />
            <Input
              label={<><span>Street</span><span className="text-red-500 font-bold">*</span></>} 
              type="text"
              placeholder="Enter Street"
              size="lg"
              name="street"
              value={formData.address.street}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input
              label={<><span>City</span><span className="text-red-500 font-bold">*</span></>} 
              type="text"
              placeholder="Enter city"
              size="lg"
              name="city"
              value={formData.address.city}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
              error={errors.city}
            />
            <Input
              label={<><span>State</span><span className="text-red-500 font-bold">*</span></>} 
              type="text"
              placeholder="Enter state"
              size="lg"
              name="state"
              value={formData.address.state}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
              error={errors.state}
            />
            <Input
              label={<><span>ZIP Code</span><span className="text-red-500 font-bold">*</span></>} 
              type="text"
              placeholder="Enter ZIP code"
              size="lg"
              name="zipCode"
              value={formData.address.zipCode}
              maxLength={6}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
              error={errors.zipCode}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-5 bg-white border border-gray-100 rounded-2xl">
          <h3 className="font-semibold text-lime">Society Contact Details</h3>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input
              label={<><span>Phone</span><span className="text-red-500 font-bold">*</span></>} 
              type="text"
              placeholder="Enter phone number"
              size="lg"
              name="phone"
              maxLength={10}
              value={formData.phone}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
            />
           <Input
              label={<><span>Email</span><span className="text-red-500 font-bold">*</span></>} 
              type="email"
              placeholder="Enter email address"
              size="lg"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              readOnly={isReadOnly()}
              error={errors.email}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address (e.g., example@domain.com)."
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center py-5">
          {formMode === "create" && (
            <Button onClick={onSubmit} className="w-full max-w-lg">
              Submit
            </Button>
          )}
          {formMode === "edit" && (
            <Button onClick={onEditHandler} className="w-full max-w-lg">
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocietyCreateForm;
