import toast from "react-hot-toast";
import { createDefineUnitService, getUnitsServices } from "../services/defineunitService";
import { useSelector } from "react-redux";

const DefineUnitHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user.Customer.customerId);

  const CreateDefineUnitHandler = async (data, token) => {
    const { unitName, buildingId, floorId, unitTypeId, unitNumber, unitsize } = data;

    if (!unitName) {
      return toast.error("Unit Name is missing");
    }
    if (!buildingId) {
      return toast.error("Building ID is missing");
    }
    if (!floorId) {
      return toast.error("Floor ID is missing");
    }
    if (!unitTypeId) {
      return toast.error("Unit Type ID is missing");
    }
    if (!unitNumber) {
      return toast.error("Unit Number is missing");
    }
    if (!unitsize) {
      return toast.error("Unit Size is missing");
    }
    
    return await createDefineUnitService({ societyId , ...data }).then((res) => {
      if (res.status === 201) {
        toast.success(`Unit ${data.unitName} created successfully.`);
      }
      return res;
    }).catch(err => {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    })
  };

  const getUnitsHandler = async(data) => {
    return await getUnitsServices({ societyId, ...data }, token);
  }

  return {
    CreateDefineUnitHandler,
    // getUnitTypeHandler
    getUnitsHandler,
  };
};

export default DefineUnitHandler;
