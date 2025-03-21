import { useSelector } from "react-redux";
import { createBuildingService, getBuildingService } from "../services/buildingService";
import toast from "react-hot-toast";

const BuildingHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user?.Customer?.customerId);

  const createBuildingHandler = async (buildingName) => {
    if (!buildingName) {
      toast.error("Building name is required !");
      return;
    }
    return await createBuildingService({ buildingName, societyId }, token)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Building created");
        }
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBuildingshandler = async (data) => {
    return await getBuildingService({ societyId }, token);
  }

  return { createBuildingHandler, getBuildingshandler };
};

export default BuildingHandler;
