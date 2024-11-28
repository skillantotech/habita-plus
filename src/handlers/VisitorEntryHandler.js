import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  createvisitorEntryService,
  getvisitorEntryService,
  getVisitorEntryTableService,
} from "../services/visitorEntryService";

const VisitEntryHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user.Customer.customerId);
  const senderId = useSelector((state) => state.auth.user.userId);

  const handleError = (error) => {
    console.error("API Error:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "An unexpected error occurred.");
    throw error;
  };

  const getTypeofVisitor = async () => {
    try {
      console.log("Fetching types of visitors...");
      const response = await getvisitorEntryService(token);
      console.log("Visitor types response:", response);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };

  const createNewVisitorEntry = async (data) => {
    try {
      const payload = { ...data, societyId, senderId };
      console.log("Creating visitor entry with payload:", payload);

      const response = await createvisitorEntryService(payload, token);
      if (response.status === 201) {
        toast.success("Visitor created successfully.");
        return response.data;
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const getNewVisitorEntryTable = async (data) => {
    try {
      console.log("Fetching visitor entries...");
      const response = await getVisitorEntryTableService({ ...data, societyId }, token);
      console.log("Visitor entry table response:", response);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };

  return {
    getTypeofVisitor,
    createNewVisitorEntry,
    getNewVisitorEntryTable,
  };
};

export default VisitEntryHandler;
