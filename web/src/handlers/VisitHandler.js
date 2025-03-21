import { createvisitorEntryService } from "@/services/visitorService";
import { useState } from "react";  // Import useState hook
import toast from "react-hot-toast";
import { useSelector } from "react-redux";



const VisitHandler = () => {
  //const [qrCodeData, setQrCodeData] = useState(null); // Define state for QR Code data

 // const token = useSelector((state) => state.auth.token);
 // const societyId = useSelector((state) => state.auth.user.Customer.customerId);
 // const senderId = useSelector((state) => state.auth.user.userId);



  // Function to create a new visitor entry
  const createNewVisitorEntry = async (data) => {
    console.log("create visitor entry");
    return await createvisitorEntryService(
      { ...data, societyId, senderId },
      token
    ).then((res) => {
      if (res.status === 201) {
        toast.success("Visitor created successfully.");
      }
    });
  };




  return {
       createNewVisitorEntry,
  };
};

export default VisitHandler;
