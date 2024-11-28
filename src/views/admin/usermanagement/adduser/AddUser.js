// import React, { useEffect, useRef, useState } from "react";
// import Input from "../../../../components/shared/Input";
// import UrlPath from "../../../../components/shared/UrlPath";
// import PageHeading from "../../../../components/shared/PageHeading";
// import { FaCamera } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import imageCompression from "browser-image-compression";
// import Button from "../../../../components/ui/Button";
// import { MdOutlineCancel } from "react-icons/md";
// // import { setFormData } from "../../../../redux/slices/addUserSlice";
// import { useDispatch, useSelector } from "react-redux";
// import AddUserHandler from "../../../../handlers/AddUserHandler";
// import Select from "../../../../components/ui/Select";

// const AddUser = () => {
//   const paths = ["User", "Add"];
//   const Heading = ["Add Resident User"];

//   const fileInputRef = useRef(null);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [photomsg, setPhotomsg] = useState("");
//   const [unitnumber, setUnitnumber] = useState(" ");
//   const [tower, setTower] = useState("");
//   const [floor, setFloor] = useState("");
//   const [unit, setUnit] = useState("");
//   const [submittedData, setSubmittedData] = useState([]);
//   const [countryCode, setCountryCode] = useState(""); // New state for country code

//   const dispatch = useDispatch();
//   const addUserForm = useSelector((state) => state.addUser.addUserForm);
//   const selectOption = useSelector((state) => state.addUser.selectOptions);
//   const { CreateAddUserHandler } = AddUserHandler();

//   const submitHandler = () => {
//     CreateAddUserHandler(addUserForm);
//   };

//   const handleTowerChange = (e) => {
//     setTower(e.target.value);
//   };

//   const handleFloorChange = (e) => {
//     setFloor(e.target.value);
//   };

//   const handleUnitChange = (e) => {
//     setUnit(e.target.value);
//   };

//   const handleIconClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 1 * 1024 * 1024) {
//         setPhotomsg(
//           "The image size is above 1MB. Please choose a smaller file."
//         );
//         return;
//       } else {
//         setPhotomsg("");
//       }

//       try {
//         const options = {
//           maxSizeMB: 1,
//           maxWidthOrHeight: 1920,
//           useWebWorker: true,
//         };

//         const compressedFile = await imageCompression(file, options);
//         const base64 = await convertToBase64(compressedFile);
//         setProfilePhoto(base64);
//       } catch (error) {
//         console.error("Error compressing the image:", error);
//       }
//     }
//   };

//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   const countryCodes = [
//     { code: "+1", country: "United States" },
//     { code: "+44", country: "United Kingdom" },
//     { code: "+91", country: "India" },
//   ];

//   const [formData, setFormData] = useState({});

//   const handleOnChange = (event) => {
//     const { name, value } = event.target;
//     console.log()
//   }

//   const countryCodesList = useSelector((state) => state.countryCode.countryCodes);
//   console.log(countryCodesList);

//   return (
//     <div className="px-5 ">
//       <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
//         <UrlPath paths={paths} />
//       </div>
//       <PageHeading heading={Heading} />
//       <div className="p-10 my-5 border rounded-lg bg-gray-100">
//         <div className="text-xl font-sans font-semibold text-lime">
//           Profile Details
//         </div>
//         <div className="flex flex-row mt-5">
//           <div className="flex items-center gap-5">
//             <div
//               className="relative h-28 w-28 rounded-full border-2 border-lime"
//               style={{
//                 backgroundImage: profilePhoto ? `url(${profilePhoto})` : "none",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <FaCamera
//                 onClick={handleIconClick}
//                 className="absolute bottom-0 right-0 bg-lime text-white text-[30px] p-2 rounded-full cursor-pointer"
//                 size={38}
//               />
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 accept="image/*"
//                 className="hidden"
//               />
//             </div>
//             <div>
//               <h2>Choose profile photo</h2>
//               <div className="text-red-700">{photomsg}</div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-3 items-center py-6">
//           <Select
//             label="Salutation"
//             options={selectOption.salutation}
//             value={addUserForm.salutation}
//             onChange={handleInputChange}
//             name="salutation"
//             color="blue"
//             size="md"
//             className="py-[14px]"
//           />
//           <Input
//             label="First Name"
//             type="text"
//             name="firstName"
//             value={addUserForm.firstName}
//             onChange={handleInputChange}
//             placeholder={"Enter Your First Name"}
//             size={"lg"}
//           />
//           <Input
//             label="Last Name"
//             type="text"
//             name="lastName"
//             value={addUserForm.lastName}
//             onChange={handleInputChange}
//             placeholder={"Enter Your Last Name"}
//             size={"lg"}
//           />
//         </div>

//         {/* mobile and country codes */}
//         <div className="grid grid-cols-4 gap-3">
//           <Select
//             label="Country Code"
//             options={countryCodesList}
//             value={formData.countryCode}
//             onChange={handleInputChange}
//             name="countryCode"
//             className="py-[14px]"
//           />
//           <Input
//             label="Mobile no. (Primary)"
//             type="number"
//             placeholder="Enter Your Mobile Number"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleInputChange}
//             size="lg"
//           />

//           <Select
//             label="Alternate Country Code"
//             options={countryCodesList}
//             value={formData.alternateCountryCode}
//             onChange={handleInputChange}
//             name="alternateCountryCode"
//             className="py-[14px]"
//           />
//           <Input
//             label="Alternate Mobile no."
//             type="number"
//             placeholder="Enter Your Alternate Mobile Number"
//             name="alternateNumber"
//             value={formData.alternateNumber}
//             onChange={handleInputChange}
//             size="lg"
//           />
//         </div>

//         <div className="grid grid-cols-3 items-center gap-5">
//           <Input
//             label={<div>Email</div>}
//             type="email"
//             name="email"
//             value={addUserForm.email}
//             onChange={handleInputChange}
//             placeholder={"Enter Your Email"}
//             size={"lg"}
//           />
//         </div>
//       </div>

//       <div className="p-10 my-5 border rounded-lg bg-gray-100">
//         <div className="text-xl font-sans font-semibold text-lime">
//           Address Details
//         </div>
//         <div className="grid grid-cols-3 gap-5 items-center">
//           <Input
//             label={<div>Address line 1</div>}
//             type="text"
//             name="addressLine1"
//             value={addUserForm.address.addressLine1}
//             onChange={handleInputChange}
//             placeholder={"Enter Your Address"}
//             size={"lg"}
//           />
//           <Input
//             label={<div>Address line 2</div>}
//             type="text"
//             name="addressLine2"
//             value={addUserForm.address.addressLine2}
//             onChange={handleInputChange}
//             placeholder={"Enter Your Address"}
//             size={"lg"}
//           />
//         </div>
//         <div className="grid grid-cols-3 gap-5 items-center">
//           <Input
//             label={<div>State</div>}
//             type="text"
//             name="state"
//             value={addUserForm.address.state}
//             onChange={handleInputChange}
//             placeholder={"Enter Your State"}
//             size={"lg"}
//           />
//           <Input
//             label={<div>City</div>}
//             type="text"
//             name="city"
//             value={addUserForm.address.city}
//             onChange={handleInputChange}
//             placeholder={"Enter Your City"}
//             size={"lg"}
//           />
//           <Input
//             label={<div>Pin</div>}
//             type="number"
//             name="pin"
//             value={addUserForm.address.pin}
//             onChange={handleInputChange}
//             placeholder={"Enter Your Pin"}
//             size={"lg"}
//           />
//           <Input
//             label="Country"
//             type="text"
//             name="country"
//             value={addUserForm.address.country}
//             onChange={handleInputChange}
//             placeholder={"Enter Your Country"}
//             size={"lg"}
//           />
//         </div>
//       </div>

//       {/* Address Details */}
//       <div className="py-5">
//         <div className="text-xl font-sans font-semibold text-lime">
//           Address Details
//         </div>
//         <div className="grid grid-cols-3 gap-5 items-center">
//           <Input
//             label="Address line 1"
//             type="text"
//             placeholder="Enter Your Address"
//             name="addressLine1"
//             value={formData?.address?.addressLine1}
//             onChange={handleInputChange}
//             size="lg"
//           />
//           <Input
//             label="Address line 2"
//             type="text"
//             placeholder="Enter Your Address"
//             name="addressLine2"
//             value={formData.address?.addressLine2}
//             onChange={handleInputChange}
//             size="lg"
//           />
//         </div>
//         <div className="grid grid-cols-3 gap-5 items-center">
//           <Input
//             label="State"
//             type="text"
//             placeholder="Enter Your State"
//             name="state"
//             value={formData.address.state}
//             onChange={handleInputChange}
//             size="lg"
//           />
//           <Input
//             label="City"
//             type="text"
//             placeholder="Enter Your City"
//             name="city"
//             value={formData.address.city}
//             onChange={handleInputChange}
//             size="lg"
//           />
//           <Input
//             label="City"
//             type="text"
//             placeholder="Enter Your City"
//             name="country"
//             value={formData.address.city}
//             onChange={handleInputChange}
//             size="lg"
//           />
//           <Input
//             label="Zip Code"
//             type="text"
//             placeholder="Enter Your PIN"
//             name="zipCode"
//             value={formData.address.zipCode}
//             onChange={handleInputChange}
//             size="lg"
//           />
//         </div>
//       </div>

//       <div className="p-10 my-5 border rounded-lg bg-gray-100">
//         <div className="text-xl font-sans font-semibold text-lime">
//           Unit Allocation
//         </div>

//         <div className="grid grid-cols-5 gap-5 items-center">
//           <Input
//             label={"Tower/Block number "}
//             type="text"
//             value={tower}
//             onChange={handleTowerChange}
//             placeholder={"Enter Tower No."}
//             size={"lg"}
//           />
//           <Input
//             label={"Floor number "}
//             type="text"
//             value={floor}
//             onChange={handleFloorChange}
//             placeholder={"Enter Floor No."}
//             size={"lg"}
//           />
//           <Input
//             label={"Unit number "}
//             type="text"
//             value={unit}
//             onChange={handleUnitChange}
//             placeholder={"Enter Unit No."}
//             size={"lg"}
//           />
//           <Input
//             label={"Select Unit number"}
//             type="text"
//             value={unitnumber} // Display the combined unit number here
//             readOnly
//             placeholder={"Combined Unit No."}
//             size={"lg"}
//           />
//           <FaPlus className="text-lime text-2xl" onClick={handleAddField} />
//         </div>

//       </div>

//       <div className="p-10 my-5 border rounded-lg bg-gray-100">
//         <div className="text-xl font-sans font-semibold text-lime">
//           Role Allocation
//         </div>

//         {/* <div className="grid grid-cols-6 gap-5 items-center my-5">
//           <div className="flex flex-row items-center gap-3">
//             <label className="text-lg">Owner</label>
//             <input
//               type="radio"
//               name="owner"
//               value={addUserForm.owner === "owner"}
//               onChange={handleInputChange}
//               className="text-lg"
//             />
//           </div>
//           <div className=" flex flex-row items-center gap-3">
//             <label>Owner Family</label>
//             <input
//               type="radio"
//               name="ownerFamily"
//               value={addUserForm.ownerFamily === "ownerFamily"}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className=" flex flex-row items-center gap-3">
//             <label>Tenant</label>
//             <input
//               type="radio"
//               name="tenant"
//               value={addUserForm.tenant === "tenant"}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className=" flex flex-row items-center gap-3">
//             <label>Tenant Family</label>
//             <input
//               type="radio"
//               name="tenantfamily"
//                value="tenantfamily"
//               checked={addUserForm.tenantfamily === "tenantfamily"}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div> */}
//         <div className="grid grid-cols-6 gap-5 items-center my-5">
//           <div className="flex flex-row items-center gap-3">
//             <label className="text-lg">Owner</label>
//             <input
//               type="radio"
//               name="role" // Name should be the same for all radio buttons in the group
//               value="owner" // This represents the selected value
//               checked={addUserForm.role === "owner"}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-row items-center gap-3">
//             <label>Owner Family</label>
//             <input
//               type="radio"
//               name="role"
//               value="ownerFamily"
//               checked={addUserForm.role === "ownerFamily"}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-row items-center gap-3">
//             <label>Tenant</label>
//             <input
//               type="radio"
//               name="role"
//               value="tenant"
//               checked={addUserForm.role === "tenant"}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-row items-center gap-3">
//             <label>Tenant Family</label>
//             <input
//               type="radio"
//               name="role"
//               value="tenantfamily"
//               checked={addUserForm.role === "tenantfamily"}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div className="space-y-4">
//           <div className=" flex flex-row items-center gap-3">
//             <label>Lives Here?</label>
//             <input
//               type="checkbox"
//               name="liveshere"
//               checked={addUserForm.liveshere}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className=" flex flex-row items-center gap-3">
//             <label>Primary Contact?</label>
//             <input
//               type="checkbox"
//               name="primarycontact"
//               checked={addUserForm.primarycontact}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-row items-center gap-3">
//             <div>Is Member Of Association Committee?</div>
//             <div>
//               <input
//                 type="checkbox"
//                 name="ismaemberofassociationcommite"
//                 checked={addUserForm.ismaemberofassociationcommite}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="max-w-sm">
//             <Input
//               label={<div> Member type</div>}
//               type="text"
//               name="membertype"
//               value={addUserForm.membertype}
//               onChange={handleInputChange}
//               placeholder={"Enter Member type"}
//               size={"lg"}
//             />
//             <Input
//               label={<div>Remark</div>}
//               type="text"
//               name="remark"
//               value={addUserForm.remark}
//               onChange={handleInputChange}
//               placeholder={"Enter Your Mobile Number"}
//               size={"lg"}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center mt-5">
//         <Button
//           className="max-w-sm"
//           type="submit"
//           onClick={submitHandler}
//           size="lg"
//         >
//           Add User
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default AddUser;

import React, { useEffect, useRef, useState } from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import { FaCamera } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from "../../../../components/ui/Button";
import { useSelector } from "react-redux";
import AddUserHandler from "../../../../handlers/AddUserHandler";
import Select from "../../../../components/ui/Select";
import UnitAllocationForUser from "./components/UnitAllocationForUser";

const AddUser = () => {
  const paths = ["User", "Add"];
  const Heading = ["Add Resident User"];

  const selectOption = {
    salutation: [
      { label: "Select Salutation", value: "" },
      { label: "Mr", value: "mr" },
      { label: "Mrs", value: "mrs" },
      { label: "Miss", value: "miss" },
      { label: "Dr", value: "dr" },
      { label: "Prof", value: "prof" },
    ],
  };

  const { CreateAddUserHandler } = AddUserHandler();

  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    photo: "",
    countryCode: "",
    mobileNumber: "",
    alternateCountryCode: "",
    alternateNumber: "",
    email: "",
    password: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      state: "",
      city: "",
      country: "",
      zipCode: "",
    },
    societyId: "",
    unitId: "",
    roleId: "",
    livesHere: "",
    primaryContact: "",
    isManagementCommittee: "",
    managementDesignation: "",
  });

  const submitHandler = () => {
    console.log(formData);
    // CreateAddUserHandler(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name in formData.address) {
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const countryCodesList = useSelector(
    (state) => state.countryCode.countryCodes
  );

  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>

      <PageHeading heading={Heading} />

      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Profile Details
        </div>

        {/* <div className="flex flex-row mt-5">
          <div className="flex items-center gap-5">
            <div
              className="relative h-28 w-28 rounded-full border-2 border-lime"
              style={{
                backgroundImage: profilePhoto ? `url(${profilePhoto})` : "none",
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
        </div> */}

        <div className="grid grid-cols-3 gap-3 items-center py-6">
          <Select
            label="Salutation"
            options={selectOption.salutation}
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
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder={"Enter Your First Name"}
            size={"lg"}
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder={"Enter Your Last Name"}
            size={"lg"}
          />
        </div>

        {/* mobile and country codes */}
        <div className="grid grid-cols-4 gap-3">
          <Select
            label="Country Code"
            options={countryCodesList}
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
            options={countryCodesList}
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
        </div>
        <div className="grid grid-cols-3 items-center gap-5">
          <Input
            label={<div>Email</div>}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={"Enter Your Email"}
            size={"lg"}
          />
          <Input
            label={<div>Password</div>}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder={"Enter Your Password"}
            size={"lg"}
          />
        </div>
      </div>

      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Address Details
        </div>
        <div className="grid grid-cols-3 gap-5 items-center">
          <Input
            label={<div>Address line 1</div>}
            type="text"
            name="addressLine1"
            value={formData.address.addressLine1}
            onChange={handleInputChange}
            placeholder={"Enter Your Address"}
            size={"lg"}
          />
          <Input
            label={<div>Address line 2</div>}
            type="text"
            name="addressLine2"
            value={formData.address.addressLine2}
            onChange={handleInputChange}
            placeholder={"Enter Your Address"}
            size={"lg"}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 items-center">
          <Input
            label={<div>State</div>}
            type="text"
            name="state"
            value={formData.address.state}
            onChange={handleInputChange}
            placeholder={"Enter Your State"}
            size={"lg"}
          />
          <Input
            label="City"
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleInputChange}
            placeholder={"Enter Your City"}
            size={"lg"}
          />
          <Input
            label={<div>Pin</div>}
            type="number"
            name="pin"
            value={formData.address.pin}
            onChange={handleInputChange}
            placeholder={"Enter Your Pin"}
            size={"lg"}
          />
          <Input
            label="Country"
            type="text"
            name="country"
            value={formData.address.country}
            onChange={handleInputChange}
            placeholder={"Enter Your Country"}
            size={"lg"}
          />
        </div>
      </div>

      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Unit Allocation
        </div>

        <UnitAllocationForUser />

        {/* <div className="grid grid-cols-5 gap-5 items-center">
          <Input
            label={"Tower/Block number "}
            type="text"
            value={tower}
            onChange={handleTowerChange}
            placeholder={"Enter Tower No."}
            size={"lg"}
          />
          <Input
            label={"Floor number "}
            type="text"
            value={floor}
            onChange={handleFloorChange}
            placeholder={"Enter Floor No."}
            size={"lg"}
          />
          <Input
            label={"Unit number "}
            type="text"
            value={unit}
            onChange={handleUnitChange}
            placeholder={"Enter Unit No."}
            size={"lg"}
          />
          <Input
            label={"Select Unit number"}
            type="text"
            value={unitnumber} // Display the combined unit number here
            readOnly
            placeholder={"Combined Unit No."}
            size={"lg"}
          />
          <FaPlus className="text-lime text-2xl" onClick={handleAddField} />
        </div> */}
      </div>

      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Role Allocation
        </div>

        <div className="grid grid-cols-6 gap-5 items-center my-5">
          <div className="flex flex-row items-center gap-3">
            <label className="text-lg">Owner</label>
            <input
              type="radio"
              name="role" // Name should be the same for all radio buttons in the group
              value="owner" // This represents the selected value
              checked={formData.role === "owner"}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>Owner Family</label>
            <input
              type="radio"
              name="role"
              value="ownerFamily"
              checked={formData.role === "ownerFamily"}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>Tenant</label>
            <input
              type="radio"
              name="role"
              value="tenant"
              checked={formData.role === "tenant"}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>Tenant Family</label>
            <input
              type="radio"
              name="role"
              value="tenantfamily"
              checked={formData.role === "tenantfamily"}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className=" flex flex-row items-center gap-3">
            <label>Lives Here?</label>
            <input
              type="checkbox"
              name="liveshere"
              checked={formData.liveshere}
              onChange={handleInputChange}
            />
          </div>
          <div className=" flex flex-row items-center gap-3">
            <label>Primary Contact?</label>
            <input
              type="checkbox"
              name="primarycontact"
              checked={formData.primarycontact}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>Is Member Of Association Committee?</div>
            <div>
              <input
                type="checkbox"
                name="ismaemberofassociationcommite"
                checked={formData.ismaemberofassociationcommite}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="max-w-sm">
            <Input
              label={<div> Member type</div>}
              type="text"
              name="membertype"
              value={formData.membertype}
              onChange={handleInputChange}
              placeholder={"Enter Member type"}
              size={"lg"}
            />
            <Input
              label={<div>Remark</div>}
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              placeholder={"Enter Your Mobile Number"}
              size={"lg"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button
          className="max-w-sm"
          type="submit"
          onClick={submitHandler}
          size="lg"
        >
          Add User
        </Button>
      </div>
    </div>
  );
};

export default AddUser;
