import React, { useState } from "react";
import Input from "../../../../components/shared/Input";
import Button from "../../../../components/ui/Button";
import BuildingHandler from "../../../../handlers/BuildingHandler";
import FloorHandler from "../../../../handlers/FloorHandler";
import UnitTypeHandler from "../../../../handlers/building_management/UnitTypeHandler";

const CreateBuilding = () => {
  const { createBuildingHandler } = BuildingHandler();
  const [building, setBuilding] = useState("");

  const handleBuildingSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createBuildingHandler(building);
      console.log(res);
      setBuilding("");
    } catch (error) {
      console.error("Error creating building:", error);
    }
  };
  return (
    <form
      onSubmit={handleBuildingSubmit}
      className="grid grid-cols-3 gap-4 mb-4 bg-gray-100"
    >
      <label>Define Tower/Building (Name / No.)</label>
      <Input
        type="text"
        name="building"
        placeholder="Enter Your Tower/Building No."
        size="lg"
        value={building}
        onChange={(e) => setBuilding(e.target.value)}
      />
      <Button className="max-w-sm" type="submit" size="md">
        Submit
      </Button>
    </form>
  );
};

const CreateFloor = () => {
  const [floors, setFloors] = useState("");
  const { createFloorHandler } = FloorHandler();

  const onFloorChange = (event) => {
    const { name, value } = event.target;
    if (name === "shortForm") {
      if (value.length > 4) {
        return;
      }
    }
    setFloors((prev) => ({ ...prev, [name]: value }));
  };

  const handleFloorsSubmit = async (e) => {
    e.preventDefault();
    console.log("Floors Submitted:", floors);
    await createFloorHandler(floors)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleFloorsSubmit}
      className="grid grid-cols-3 gap-4 mb-4 bg-gray-100"
    >
      <label>Define Floors</label>
      <Input
        label="Enter Floor name"
        type="text"
        name="floorName" // Corrected from "floors" to "floorName"
        placeholder="Enter Your Define Floors"
        size="lg"
        value={floors.floorName}
        onChange={onFloorChange}
      />

      <Input
        label="Short Form"
        type="text"
        maxlength="4"
        name="shortForm" // Corrected from "floors" to "floorName"
        placeholder="Enter Your Define Floors"
        size="lg"
        value={floors.shortForm}
        onChange={onFloorChange}
      />

      <Button className="max-w-sm" type="submit" size="md">
        Submit
      </Button>
    </form>
  );
};

const CreateUnitType = () => {
  const [unitType, setUnitType] = useState("");
  const { createUnitTypeHandler } = UnitTypeHandler();

  const handleUnitTypeSubmit = (e) => {
    console.log(unitType);
    e.preventDefault();
    createUnitTypeHandler(unitType)
      .then((res) => {
        console.log(res);
        setUnitType("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleUnitTypeSubmit}
      className="grid grid-cols-3 gap-4 mb-4 bg-gray-100"
    >
      <Input
        label="Define Unit Type (e.g. 1BHK, 2BHK, 3BHK)"
        type="text"
        name="unitTypeName"
        placeholder="Enter Your Unit Type"
        size="lg"
        value={unitType}
        onChange={(e) => setUnitType(e.target.value)}
      />
      <Button className="max-w-sm" type="submit" size="md">
        Submit
      </Button>
    </form>
  );
};

const DefineStructerForm = () => {
  return (
    <div className="p-10 my-5 border rounded-lg space-y-5">
      <CreateBuilding />
      <CreateFloor />
      <CreateUnitType />
    </div>
  );
};

export default DefineStructerForm;
