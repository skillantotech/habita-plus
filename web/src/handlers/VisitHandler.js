import { createvisitorEntryService } from "@/services/visitorService";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const VisitHandler = () => {
  const token = useSelector((state) => state.auth.token);
 // const societyId = useSelector((state) => state.auth.user.Customer.customerId);
 // console.log(societyId);
  const senderId = useSelector((state) => state.auth.user.userId);

  const createNewVisitorEntry = async (data) => {
    return await createvisitorEntryService({ ...data, societyId, senderId }, token)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Visitor created successfully.");
        }
      })
      .catch((error) => {
        toast.error("Error creating visitor entry: " + error.message);
      });
  };

  return { createNewVisitorEntry };
};

export default VisitHandler;
