import React, { useEffect, useState } from "react";
import Input from "../../../../components/shared/Input";
import Button from "../../../../components/ui/Button";
import DefineUnitHandler from "../../../../handlers/DefineUnitHandler";
import BuildingHandler from "../../../../handlers/BuildingHandler";
import Select from "../../../../components/ui/Select";
import FloorHandler from "../../../../handlers/FloorHandler";
import UnitTypeHandler from "../../../../handlers/building_management/UnitTypeHandler";

const DefineUnitForm = () => {
  const { CreateDefineUnitHandler } = DefineUnitHandler();

  const { getFloorHandler } = FloorHandler();
  const { getUnitTypeHandler } = UnitTypeHandler();
  const { getBuildingshandler } = BuildingHandler();

  const [buildingOptions, setBuildingOptions] = useState([]);
  const [floorOptions, setFloorOptions] = useState([]);
  const [unitTypeOptions, setUnitTypeOptions] = useState([]);

  const [unitName, setUnitName] = useState({
    buildingId: "",
    floorId: "",
    unitNumber: "",
  });

  const getBuildings = () => {
    getBuildingshandler()
      .then((res) => {
        console.log(res);
        const optionData = res.data.data.map((el) => ({
          label: el.buildingName,
          value: el.buildingId,
        }));
        console.log(optionData);
        setBuildingOptions([
          { label: "select building", value: "" },
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
        console.log(res);
        const optionData = res.data.data.map((el) => ({
          label: `${el.floorName} (${el.shortForm})`,
          value: el.floorId,
          shortForm: el.shortForm,
        }));

        setFloorOptions([{ label: "select Floor", value: "" }, ...optionData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUnitTypes = () => {
    getUnitTypeHandler()
      .then((res) => {
        console.log(res);
        const optionData = res.data.data.map((el) => ({
          label: el.unitTypeName,
          value: el.unitTypeId,
        }));

        setUnitTypeOptions([
          { label: "select UnitType", value: "" },
          ...optionData,
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBuildings();
    getFloors();
    getUnitTypes();
  }, []);

  const [defineUnit, setDefineUnit] = useState({
    buildingId: "",
    floorId: "",
    unitTypeId: "",
    unitNumber: "",
    unitsize:"",
  });

  const handleChange = (e, data) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDefineUnit({
      ...defineUnit,
      [name]: value,
    });
  };

  const resetFormData = () => {
    setDefineUnit({
      buildingId: "",
      floorId: "",
      unitTypeId: "",
      unitNumber: "",
      unitsize: "",
    });
    setUnitName({
      buildingId: "",
      floorId: "",
      unitNumber: "",
    });
  };

  const submitHandler = async() => {
    console.log("define unit", defineUnit);
    const un = unitName.buildingId + unitName.floorId + unitName.unitNumber;
    await CreateDefineUnitHandler({ unitName: un, ...defineUnit }).then((res) => {
      if (res.status === 201) {
        console.log(res);
        resetFormData();
      };
    }).catch(err=>{})
  };

  const onBuildingChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
    <div className="p-10 my-5 border rounded-lg bg-gray-100">
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
        <Select
          label="Unit Type"
          options={unitTypeOptions}
          value={defineUnit.unitTypeId}
          onChange={handleChange}
          name="unitTypeId"
          color="blue"
          size="md"
          className="py-[14px]"
        />
        <Input
          label={"Unit Number"}
          type="text"
          name="unitNumber"
          placeholder="Enter Your Floor No"
          size="lg"
          value={defineUnit.unitNumber}
          onChange={onUnitNumberChange}
        />
        <Input
          label="Unit Size (Sq.feet)"
          type="text"
          name="unitsize"
          placeholder="Enter Super Built-up Area"
          size="lg"
          value={defineUnit.unitsize}
          onChange={handleChange}
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
          Submit
        </Button>
      </div>
    </div>
  );
};

export default DefineUnitForm;
