import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { parkingBookedService, getParkingStatusService } from "../services/parkingService";

const ParkingHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user?.Customer?.customerId);

  if (!societyId) {
    console.error("Error: Society ID is undefined.");
  }

  const createParkingHandler = async (data) => {
    try {
      if (!societyId) {
        toast.error("Society ID is missing. Cannot create parking slot.");
        return;
      }

      const response = await parkingBookedService(societyId, token, data);
      if (response.status === 201) {
        toast.success("Parking created successfully.");
      }
    } catch (error) {
      console.error("Error creating parking:", error);
      toast.error("Error creating parking: " + (error.response?.data?.message || error.message));
    }
  };

  const getParkingHandler = async () => {
    try {
      if (!societyId) {
        toast.error("Society ID is missing. Cannot fetch parking data.");
        return;
      }

      const response = await getParkingStatusService(societyId, token);
      return response.data;
    } catch (error) {
      console.error("Error fetching parking data:", error);
      toast.error("Error fetching parking: " + (error.response?.data?.message || error.message));
    }
  };

  return {
    createParkingHandler,
    getParkingHandler,
  };
};

export default ParkingHandler;