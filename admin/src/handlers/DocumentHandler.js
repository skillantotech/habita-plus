import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import {
  createDocumentBySocietyId,
  createDocumentByUserId,
  getDocumentsBySocietyId,
  getDocumentsByUserId,
  // You would need to implement these:
} from "../services/documentService"; // Adjust path if needed

const DocumentHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user.Customer.customerId);
  const userId = useSelector((state) => state.auth.user?.userId);

  const createDocumentHandler = async (data, createdFor = "society") => {
    try {
      let res;

      if (createdFor === "society") {
        res = await createDocumentBySocietyId(societyId, data, token);
      } else {
        res = await createDocumentByUserId(userId, data, token);
      }

      if (res.status === 201) {
        toast.success("Document created successfully.");
      }

      return res;
    } catch (error) {
      console.error("Create Document Error:", error);
      toast.error("Failed to create document.");
    }
  };

  const getDocumentHandler = async (filters = {}, forWhom = "society") => {
    try {
      let res;

      if (forWhom === "society") {
        res = await getDocumentsBySocietyId(societyId, token, filters);
      } else {
        res = await getDocumentsByUserId(userId, token, filters);
      }

      return res?.data;
    } catch (error) {
      console.error("Get Document Error:", error);
      toast.error("Failed to fetch documents.");
    }
  };


  return {
    createDocumentHandler,
    getDocumentHandler,
 
  };
};

export default DocumentHandler;




//   const deleteDocumentByIdHandler = async (documentId) => {
//     try {
//       const res = await deleteDocumentById(documentId, token);
//       toast.success("Document deleted successfully.");
//       return res;
//     } catch (error) {
//       console.error("Delete Document Error:", error);
//       toast.error("Failed to delete document.");
//     }
//   };

//   const updateDocumentHandler = async (documentId, data) => {
//     try {
//       const res = await updateDocumentById(documentId, data, token);
//       if (res.status === 200) {
//         toast.success("Document updated successfully.");
//       }
//       return res;
//     } catch (error) {
//       console.error("Update Document Error:", error);
//       toast.error("Failed to update document.");
//     }
//   };