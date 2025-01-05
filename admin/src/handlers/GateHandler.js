import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { CreateGateService } from "../services/gateCreationService";

const GateHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user.Customer.customerId);

  const GateRelationshipHandler = async (gates) => {
    try {
      console.log("Input gates:", JSON.stringify(gates, null, 2));
      console.log("Society ID type:", typeof societyId);
      console.log("Society ID value:", societyId);

      const payload = gates.map((gate) => ({
        societyId: societyId,
        gateName: gate.gateName,
        gateNumber: gate.gateNumber,
      }));

      // Add To see exact payload structure
      console.log("Final payload:", JSON.stringify(payload, null, 2));

      const response = await CreateGateService(payload, token);
      console.log("API Response:", response);

      if (response.status === 201) {
        toast.success("Gates submitted successfully.");
        return response;
      } else {
        const errorMessage = response.data?.message || "Failed to submit gates.";
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Gate submission error:", error);
      toast.error(error.message || "Failed to submit gates.");
      throw error;
    }
  };

  return {
    GateRelationshipHandler,
  };
};

export default GateHandler;