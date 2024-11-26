import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/shared/Input";
import Select from "../components/ui/Select";
import { FaCamera } from "react-icons/fa";
import Button from "../components/ui/Button";
import UserHandler from "../handlers/UserHandler";
import UserRoleHandler from "../handlers/UserRoleHandler";
import CustomerHandler from "../handlers/superadmin/CustomerHandler";

const CreateUserForm = () => {
    const dispatch = useDispatch();
    const formData = useSelector(
      (state) => state.societyModeratorForm.formData
    );
    const selectOptions = useSelector(
      (state) => state.societyModeratorForm.selectOptions
    );
    const { createSocietyModeratorHandler } = UserHandler();
    const { getCustomerHandler } = CustomerHandler();

    const fileInputRef = useRef(null);
    const [photomsg, setPhotomsg] = useState("");

    const { getUserRolesHandler } = UserRoleHandler();

    const getUserRoles = async () => {
        const result = await getUserRolesHandler();
        // console.log(result.data);
        const newData = result.data
                .filter(el=>el.roleCategory === 'society_moderator')
                .map(el=>({label: el.roleCategory, value: el.roleId }))

        dispatch({
            type: 'societyModeratorForm/setUserRoleOptions',
            payload: newData
        });
    }

    useEffect(() => {
        getUserRoles();
    }, [])

    const fetchSocietiesData = async () => {
        try {
          const result = await getCustomerHandler();
          console.log(result);
          const newValue = result.data.data.map(el=>({label:el.customerName, value: el.customerId}))
    
          dispatch({
            type: 'societyModeratorForm/setSocietyLists',
            payload: newValue
          });
        } catch (error) {
          console.error("Failed to fetch societies data:", error);
        }
      };

      useEffect(()=>{
        fetchSocietiesData();
      },[])


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch({
            type: 'societyModeratorForm/setOnChangeFormField',
            payload: { name, value }
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          if (file.size > 1 * 1024 * 1024) {
            setPhotomsg("The image size is above 1MB. Please choose a smaller file.");
            return;
          } else {
            setPhotomsg("");
            dispatch({
              type: 'societyModeratorForm/setOnChangeFormField',
              payload: { name: "profilePhoto", value: file }, // Store the file object
            });
          }
        }
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();
        createSocietyModeratorHandler(formData).then(res => {
        //    dispatch({
        //      type: "societyModeratorForm/resetFormData",
        //      payload: null,
        //    });
        })
    };

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    return (
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Profile Details
        </div>

        <form>
          <div className="flex flex-row mt-5">
            <div className="flex items-center gap-5">
              <div
                className="relative h-28 w-28 rounded-full border-2 border-lime"
                style={{
                  backgroundImage: formData.profilePhoto
                    ? `url(${formData.profilePhoto})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <FaCamera
                  onClick={handleIconClick}
                  className="absolute bottom-0 right-0 bg-lime text-white text-[30px] p-2 rounded-full cursor-pointer"
                  size={38}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div>
                <h2>Choose profile photo</h2>
                <div className="text-red-700">{photomsg}</div>
              </div>
            </div>
          </div>

          {/* Profile Fields */}
          <div className="grid grid-cols-3 gap-5 items-center py-6">
            <Select
              label="Salutation"
              options={selectOptions.salutation}
              value={formData.salutation}
              onChange={handleInputChange}
              name="salutation"
              color="blue"
              size="md"
              className="py-[14px]"
            />
            <Input
              label="First Name"
              type="text"
              placeholder="Enter Your First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              size="lg"
            />
            <Input
              label="Last Name"
              type="text"
              placeholder="Enter Your Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              size="lg"
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-4 items-center gap-5">
            <Select
              label="Country Code"
              options={selectOptions.countryCodes}
              value={formData.countryCode}
              onChange={handleInputChange}
              name="countryCode"
              className="py-[14px]"
            />
            <Input
              label="Mobile no. (Primary)"
              type="number"
              placeholder="Enter Your Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              size="lg"
            />

            <Select
              label="Alternate Country Code"
              options={selectOptions.countryCodes}
              value={formData.alternateCountryCode}
              onChange={handleInputChange}
              name="alternateCountryCode"
              className="py-[14px]"
            />
            <Input
              label="Alternate Mobile no."
              type="number"
              placeholder="Enter Your Alternate Mobile Number"
              name="alternateNumber"
              value={formData.alternateNumber}
              onChange={handleInputChange}
              size="lg"
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              size="lg"
            />
          </div>

          {/* Address Details */}
          <div className="py-5">
            <div className="text-xl font-sans font-semibold text-lime">
              Address Details
            </div>
            <div className="grid grid-cols-3 gap-5 items-center">
              <Input
                label="Address line 1"
                type="text"
                placeholder="Enter Your Address"
                name="addressLine1"
                value={formData?.address?.addressLine1}
                onChange={handleInputChange}
                size="lg"
              />
              <Input
                label="Address line 2"
                type="text"
                placeholder="Enter Your Address"
                name="addressLine2"
                value={formData.address?.addressLine2}
                onChange={handleInputChange}
                size="lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-5 items-center">
              <Input
                label="State"
                type="text"
                placeholder="Enter Your State"
                name="state"
                value={formData.address.state}
                onChange={handleInputChange}
                size="lg"
              />
              <Input
                label="City"
                type="text"
                placeholder="Enter Your City"
                name="city"
                value={formData.address.city}
                onChange={handleInputChange}
                size="lg"
              />
              <Input
                label="country"
                type="text"
                placeholder="Enter Your Country "
                name="country"
                value={formData.address.city}
                onChange={handleInputChange}
                size="lg"
              />
              <Input
                label="Zip Code"
                type="text"
                placeholder="Enter Your PIN"
                name="zipCode"
                value={formData.address.zipCode}
                onChange={handleInputChange}
                size="lg"
              />
            </div>
          </div>

          {/* Role and Remark */}
          <div className="grid grid-cols-2 gap-5">
            <Select
              label="Role"
              options={selectOptions.userRoles}
              value={formData.roleId}
              onChange={handleInputChange}
              name="roleId"
              color="blue"
              size="md"
              className="py-[14px]"
            />
            <Input
              label="Remarks"
              type="text"
              placeholder="Enter Any Remarks"
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              size="lg"
            />
            <Select
              label="Select Society"
              options={selectOptions.societyLists}
              value={formData.societyId}
              onChange={handleInputChange}
              name="societyId"
              color="blue"
              size="md"
              className="py-[14px]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    );
};

export default CreateUserForm;
