import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Button from "../../../../components/ui/Button";
import Select from "../../../../components/ui/Select";
import FloorHandler from "../../../../handlers/FloorHandler";
import UserHandler from "../../../../handlers/UserHandler";
import BuildingHandler from "../../../../handlers/BuildingHandler";
import UserRoleHandler from "../../../../handlers/UserRoleHandler";

const AddUser = () => {
  const paths = ["User", "Add"];
  const Heading = ["Add Resident User"];

  const societyId =
    useSelector((state) => state.auth.user?.Customer?.customerId) || "";
    const unitId =
    useSelector((state) => state.auth.user?.Unit?.unitId) || "";
  const countryCodesList =
    useSelector((state) => state.countryCode.countryCodes) || [];

  const { createSocietyResidentUserHandler } = UserHandler();
  const { getUserRolesHandler } = UserRoleHandler();

  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    countryCode: "",
    mobileNumber: "",
    alternateCountryCode: "",
    alternateNumber: "",
    email: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      state: "",
      city: "",
      country: "",
      zipCode: "",
    },
    liveshere: false,
    primarycontact: false,
    ismaemberofassociationcommite: false,
    membertype: "",
    remark: "",
    societyId: "",
    roleId: "",
    unitId: "", // Ensure this is initialized
  });

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

  const roleCategoryMapping = {
    society_owner_family: "Owner Family",
    society_owner: "Owner",
    society_tenant: "Tenant",
    society_tenant_family: "Tenant Family",
  };

  useEffect(() => {
    if (societyId) {
      setFormData((prev) => ({ ...prev, societyId }));
    }
  }, [societyId]);
    useEffect(() => {
    if (unitId) {
      setFormData((prev) => ({ ...prev, unitId }));
    }
  }, [unitId]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name in formData.address) {
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Please fill all mandatory fields.");
      return false;
    }
    if (!formData.mobileNumber) {
      toast.error("Please fill all mandatory fields.");
      return false;
    }
    return true;
  };

  const fetchRoles = async () => {
    try {
      const result = await getUserRolesHandler();
      if (result?.data) {
        const filteredRoles = result.data
          .filter((el) =>
            [
              "society_owner_family",
              "society_tenant",
              "society_owner",
              "society_tenant_family",
            ].includes(el.roleCategory)
          )
          .map((el) => ({
            label: roleCategoryMapping[el.roleCategory] || el.roleCategory,
            value: el.roleId,
          }));
        setRoles(filteredRoles);
      } else {
        toast.error("Invalid data format received from the server.");
      }
    } catch (error) {
      console.error("Error fetching roles:", error);
      toast.error("Failed to load roles.");
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const submitProfileUser = async () => {
    if (!selectedRoleId) {
      toast.error("Please select a role.");
      return;
    }
    if (!validateForm()) return;

    const updatedFormData = {
      ...formData,
      societyId,
      roleId: selectedRoleId,
     
    };

    console.log("FormData before submission:", updatedFormData);

    try {
      await createSocietyResidentUserHandler(societyId, updatedFormData);
      toast.success("User profile created successfully.");
    } catch (error) {
      console.error("Error creating resident:", error);
      toast.error("Failed to create user profile.");
    }
  };

  const handleRadioChange = (roleId) => {
    setSelectedRoleId(roleId);
  };

  const { getFloorHandler } = FloorHandler();
  const { getBuildingshandler } = BuildingHandler();

  const [buildingOptions, setBuildingOptions] = useState([]);
  const [floorOptions, setFloorOptions] = useState([]);

  const [unitName, setUnitName] = useState({
    buildingId: "",
    floorId: "",
    unitNumber: "",
  });

  const [units, setUnits] = useState([]);

  const getBuildings = () => {
    getBuildingshandler()
      .then((res) => {
        const optionData = res.data.data.map((el) => ({
          label: el.buildingName,
          value: el.buildingId,
        }));
        setBuildingOptions([
          { label: "Select Building", value: "" },
          ...optionData,
        ]);
      })
      .catch((error) => {
        console.error("Error fetching buildings:", error);
      });
  };

  const getFloors = () => {
    getFloorHandler()
      .then((res) => {
        const optionData = res.data.data.map((el) => ({
          label: `${el.floorName} (${el.shortForm})`,
          value: el.floorId,
          shortForm: el.shortForm,
        }));
        setFloorOptions([{ label: "Select Floor", value: "" }, ...optionData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBuildings();
    getFloors();
  }, []);

  const [defineUnit, setDefineUnit] = useState({
    buildingId: "",
    floorId: "",
    unitNumber: "",
  });

  const resetFormData = () => {
    setDefineUnit({
      buildingId: "",
      floorId: "",
      unitNumber: "",
    });
    setUnitName({
      buildingId: "",
      floorId: "",
      unitNumber: "",
    });
  };

  const submitHandler = async () => {
       const unitId = unitName.buildingId + unitName.floorId + unitName.unitNumber;
       setUnits((prev) => [...prev, unitId]);
       // setFormData((prev) => ({ ...prev, unitId })); // Update unitId in formData
      resetFormData();
  };

  const onBuildingChange = (e) => {
    const { name, value } = e.target;
    setDefineUnit({
      ...defineUnit,
      [name]: value,
    });
    const id = parseInt(value);
    const bName = buildingOptions.find((el) => el.value === id);
    setUnitName((prev) => ({ ...prev, buildingId: bName.label.toUpperCase() }));
  };

  function onFloorChange(e) {
    const { name, value } = e.target;
    setDefineUnit({
      ...defineUnit,
      [name]: value,
    });
    const id = parseInt(value);
    const bName = floorOptions.find((el) => el.value === id);
    setUnitName((prev) => ({
      ...prev,
      floorId: bName.shortForm.toUpperCase(),
    }));
  }

  function onUnitNumberChange(e) {
    const { name, value } = e.target;
    setDefineUnit({
      ...defineUnit,
      [name]: value,
    });
    setUnitName((prev) => ({
      ...prev,
      unitNumber: value,
    }));
  }
  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>

      <PageHeading heading={Heading} />
 {/* <form> */}
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Profile Details
        </div>

 
        <div className="grid grid-cols-3 gap-3 items-center py-6">
       
          <Select
            label={<span>Salutation<span className="text-red-500">*</span></span>}           
            options={selectOption.salutation}
            value={formData.salutation}
            onChange={handleInputChange}
            name="salutation"
            color="blue"
            size="md"
            className="py-[14px]"
          />
          <Input
           label={<span>First Name <span className="text-red-500">*</span></span>}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder={"Enter First Name"}
            size={"lg"}
          />
          <Input
            label={<span>Last Name <span className="text-red-500">*</span></span>}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder={"Enter Last Name"}
            size={"lg"}
          />
        </div>

        {/* mobile and country codes */}
        <div className="grid grid-cols-4 gap-3">
          <Select
            label={<span>Country Code<span className="text-red-500">*</span></span>} 
            options={countryCodesList}
            value={formData.countryCode}
            onChange={handleInputChange}
            name="countryCode"
            className="py-[14px]"
          />
          <Input
            label={<span>Mobile No. (Primary)<span className="text-red-500">*</span></span>} 
            type="number"
            placeholder="Enter Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            size="lg"
          />
          <Select
           label={<span>Country Code<span className="text-red-500">*</span></span>} 
            options={countryCodesList}
            value={formData.alternateCountryCode}
            onChange={handleInputChange}
            name="alternateCountryCode"
            className="py-[14px]"
          />
          <Input
            label={<span>Alternate Mobile No.<span className="text-red-500">*</span></span>} 
            type="number"
            placeholder="Enter Alt. Mobile Number"
            name="alternateNumber"
            value={formData.alternateNumber}
            onChange={handleInputChange}
            size="lg"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-5">
          <Input
           label={<span>Email<span className="text-red-500">*</span></span>} 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={"Enter Email"}
            size={"lg"}
          />
        
        </div>

 {/* <div className="p-10 my-5 border rounded-lg bg-gray-100"> */}
        <div className="text-xl font-sans font-semibold text-lime mt-10">
          Address Details
        </div>
        <div className="grid grid-cols-3 gap-3 items-center py-6 ">
          <Input
          // label={<span>Address line 1<span className="text-red-500">*</span></span>}
           label={<span>Address line 1</span>} 
            name="addressLine1"
            value={formData.address.addressLine1}
            onChange={handleInputChange}
            placeholder={"Enter Address"}
            size={"lg"}
          />
          <Input
           label={<span>Address line 2</span>} 
            type="text"
            name="addressLine2"
            value={formData.address.addressLine2}
            onChange={handleInputChange}
            placeholder={"Enter Address"}
            size={"lg"}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 items-center">
          <Input
           label={<span>State</span>} 
            type="text"
            name="state"
            value={formData.address.state}
            onChange={handleInputChange}
            placeholder={"Enter State"}
            size={"lg"}
          />
          <Input
            label={<span>City</span>} 
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleInputChange}
            placeholder={"Enter City"}
            size={"lg"}
          />
          <Input
            label={<span>Pin</span>} 
            type="number"
            name="zipCode"
            value={formData.address.zipCode}
            onChange={handleInputChange}
            placeholder={"Enter Postal Pin"}
            size={"lg"}
          />
          <Input
            label={<span>Country</span>} 
            type="text"
            name="country"
            value={formData.address.country}
            onChange={handleInputChange}
            placeholder={"Enter Country"}
            size={"lg"}
          />
        </div>
        <div className="text-xl font-sans font-semibold text-lime mt-10">
          Role Allocation 
        </div>
  <div className="text-lg font-sans mb-2  mt-2 font-semibold text-gray-700">
  Role <span className="text-red-500">*</span>
</div>
        <div className="flex flex-wrap items-center gap-4 my-2 py-2">
  {roles.length > 0 ? (
    roles.map((role) => (
      <div key={role.value} className="flex items-center gap-2">
        <input
          type="radio"
          name="role"
          value={role.value}
          checked={selectedRoleId === role.value}
          onChange={() => handleRadioChange(role.value)}
          className="cursor-pointer"
        />
        <label className="cursor-pointer">{role.label}</label>
      </div>
    ))
  ) : (
    <div>No roles available</div>
  )}
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
            <label>Primary Contact? </label>
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
              label={<div>Remark </div>}
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              placeholder={"Give your remark"}
              size={"lg"}
            />
          </div>
        </div>
      {/* </div> */}

         
      </div>

     

      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Unit Allocation
        </div>
 <div className=" my-5 rounded-lg">
      <div className="grid grid-cols-3 gap-5 items-center py-6">
        <Select
          label="Tower /Building (Name / No.)"
          options={buildingOptions}
          value={defineUnit.buildingId}
          onChange={onBuildingChange}
          name="buildingId"
          color="blue"
          size="md"
          className="py-[14px]"
        />
        <Select
          label="Select Floor"
          options={floorOptions}
          value={defineUnit.floorId}
          onChange={onFloorChange}
          name="floorId"
          color="blue"
          size="md"
          className="py-[14px]"
        />
        <Input
          label={"Unit Number"}
          type="text"
          name="unitNumber"
          placeholder="Enter Unit No"
          size="lg"
          value={defineUnit.unitNumber}
          onChange={onUnitNumberChange}
        />
        <div>
          <h3 className="">
            <strong>Unit Name</strong> :{" "}
            {`${unitName.buildingId}${unitName.floorId}${unitName.unitNumber}`}{" "}
          </h3>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <Button
          className="max-w-sm"
          type="submit"
          onClick={submitHandler}
          size="lg"
        >
          Add Unit
        </Button>
      </div>

      <div className="mt-5">
        <h5>Unit Names List</h5>
        <div className="py-5 grid grid-cols-3 gap-3">
          {units.map((el) => (
            <div className="bg-gray-200 p-2 border rounded-md text-center">
              <span className="font-bold text-turquoise">{el}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button className="max-w-sm" type="button" onClick={submitProfileUser} size="lg">
            Add Profile
          </Button>
        </div>
      {/* </form> */}
    </div>
  );
};
export default AddUser;
