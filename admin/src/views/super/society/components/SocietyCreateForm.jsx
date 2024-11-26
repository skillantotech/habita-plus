import React from "react";
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

  console.log(formMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(setCustomerFormField({ name, value }));
  };

  return (
    <div className="flex">
      <div className="w-full space-y-5">
        <div className="p-5 bg-white border border-gray-100 rounded-2xl">
          <h3 className="font-semibold text-lime">Customer Info</h3>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input
              label="Customer Name"
              type="text"
              placeholder="Enter customer name"
              size="lg"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              readOnly={formMode !== "create"}
            />
            <Select
              label="Select Customer Type"
              options={customerTypeOptions}
              value={formData.customerType}
              onChange={handleInputChange}
              color="blue"
              size="md"
              name="customerType"
              className="py-[14px]"
              readOnly={formMode !== "create"}
            />
            <Select
              label="Select Subscription Plan"
              options={subscriptionPlans}
              value={formData.subscriptionId}
              onChange={handleInputChange}
              color="blue"
              size="md"
              name="subscriptionId"
              className="py-[14px]"
              readOnly={formMode === "view"}
            />
            <Input
              label="Establisment Year"
              type="number"
              placeholder="Enter year"
              size="lg"
              name="establishedYear"
              value={formData.establishedYear}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
            {formData.customerType === "society" && (
              <Select
                label="Select Society Type"
                options={societyTypeOptions}
                value={formData.societyType}
                onChange={handleInputChange}
                color="blue"
                size="md"
                name="societyType"
                className="py-[14px]"
                readOnly={formMode === "view"}
              />
            )}
          </div>
        </div>

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
              readOnly={formMode === "view"}
            />
            <Input
              label="Builder Details"
              type="text"
              placeholder="Enter Builder Scocil Link"
              size="lg"
              name="builderSocialLink"
              value={formData.builderSocialLink}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-100 rounded-2xl">
          <h3 className="font-semibold text-lime">
            Society Location / Address
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input
              label="Address Line 1"
              type="text"
              placeholder="Enter address line 1"
              size="lg"
              name="address1"
              value={formData.address.address1}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
            <Input
              label="Address line 2"
              type="text"
              placeholder="Enter your address"
              size="lg"
              name="street"
              value={formData.address.street}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input
              label="City"
              type="text"
              placeholder="Enter your city"
              size="lg"
              name="city"
              value={formData.address.city}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
            <Input
              label="State"
              type="text"
              placeholder="Enter your state"
              size="lg"
              name="state"
              value={formData.address.state}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
            <Input
              label="Pin"
              type="text"
              placeholder="Enter your pin"
              size="lg"
              name="zipCode"
              value={formData.address.zipCode}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-100 rounded-2xl">
          <h3 className="font-semibold text-lime">Society Contact Details</h3>
          <div className="mt-3 grid grid-cols-3 gap-5 items-center">
            <Input
              label="Phone"
              type="text"
              placeholder="Enter your phone number"
              size="lg"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
            <Input
              label="Email"
              type="text"
              placeholder="Enter your email"
              size="lg"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              readOnly={formMode === "view"}
            />
          </div>
        </div>

        <div className="flex justify-center py-5">
          {formMode === "create" && (
            <Button onClick={onSubmit} className="w-full max-w-lg">
              Submit
            </Button>
          )}

          {formMode === "edit" && (
            <Button onClick={() => onEditHandler()} className="w-full max-w-lg">
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocietyCreateForm;
