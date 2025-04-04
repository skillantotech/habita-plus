import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createFloorService, getFloorService } from "../services/floorService";

const FloorHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user.Customer.customerId);

  const createFloorHandler = async (data) => {
    const { floorName, shortForm } = data;
    if (!floorName || !shortForm) {
      toast.error("Fill all the fields !");
      return;
    }

    return await createFloorService({ floorName, shortForm, societyId }, token)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Floor created");
        }
        return res;
      })
      .catch((err) => {
        if (err.status === 400) {
          toast.error(err.response.data.message);
        }
        console.log(err);
      });
  };

  const getFloorHandler = async (data) => {
    return await getFloorService({ societyId, ...data }, token);
  };

  return { createFloorHandler, getFloorHandler };
};

export default FloorHandler;
