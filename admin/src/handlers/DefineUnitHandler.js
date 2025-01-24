

import toast from "react-hot-toast";
import { createDefineUnitService, getUnitsServices } from "../services/defineunitService";
import { useSelector } from "react-redux";

const DefineUnitHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user.Customer.customerId);

  const CreateDefineUnitHandler = async (data) => {
    const requiredFields = ["unitName", "buildingId", "floorId", "unitTypeId", "unitNumber", "unitsize"];
    const missingField = requiredFields.find((field) => !data[field]);

    if (missingField) {
      return toast.error(`${missingField} is missing`);
    }

    try {
      const response = await createDefineUnitService({ societyId, ...data }, token);
      if (response.status === 201) {
        toast.success(`Unit ${data.unitName} created successfully.`);
      }
      return response;
    } catch (error) {
      console.error("Create Unit Error:", error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "An error occurred while creating the unit.");
    }
  };

  const getUnitsHandler = async (filters = {}) => {
    try {
      const response = await getUnitsServices(societyId, { ...filters }, token);
      return response.data;
    } catch (error) {
      console.error("Get Units Error:", error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "An error occurred while fetching units.");
      return null;
    }
  };
  

  return {
    CreateDefineUnitHandler,
    getUnitsHandler,
  };
};

export default DefineUnitHandler;
