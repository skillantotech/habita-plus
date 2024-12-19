// import toast from "react-hot-toast";
// import { useSelector } from "react-redux";
// import {
//   createvisitorEntryService,
//   getvisitorEntryService,
//   getVisitorEntryTableService,
// } from "../services/visitorEntryService";

// const VisitEntryHandler = () => {
//   const token = useSelector((state) => state.auth.token);
//   const societyId = useSelector((state) => state.auth.user.Customer.customerId);
//   const senderId = useSelector((state) => state.auth.user.userId);

//   const getTypeofVisitor = async () => {
//     console.log("get type of visitor ");

//     return await getvisitorEntryService(token)
//       .then((res) => {
//         console.log("res visitor entry handler", res);

//         return res;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const createNewVisitorEntry = async (data) => {
//     console.log("create visitor entry");
//     return await createvisitorEntryService(
//       { ...data, societyId, senderId },
//       token
//     ).then((res) => {
//       if (res.status === 201) {
//         toast.success("visitor created successfully.");
//       }
//     });
//   };

//   const getNewVisitorEntryTable = async (data) => {
//     console.log("visitor list table", data);
//     return await getVisitorEntryTableService({ ...data, societyId }, token)
//       .then((res) => {
//         return res;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return {
//     getTypeofVisitor,
//     createNewVisitorEntry,
//     getNewVisitorEntryTable,
//   };
// };

// export default VisitEntryHandler;
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  createvisitorEntryService,
  getvisitorEntryService,
  getVisitorEntryTableService,
} from "../services/visitorEntryService";
import { getVisitorRelationshipService } from "../services/visitorRelationshipService"; // Ensure correct import

const VisitEntryHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user.Customer.customerId);
  const senderId = useSelector((state) => state.auth.user.userId);

  const fetchVisitorRelationship = async () => {
    try {
      const response = await getVisitorRelationshipService({ societyId }, token);
      if (response.status === 200) {
        return response.data;
      }
      console.error("Unexpected response status:", response.status);
      return [];
    } catch (err) {
      console.error("Error fetching visitor relationships:", err.message);
      return [];
    }
  };

   const createNewVisitorEntry = async (data) => {
    console.log("create visitor entry");
    return await createvisitorEntryService(
      { ...data, societyId, senderId },
      token
    ).then((res) => {
      if (res.status === 201) {
        toast.success("visitor created successfully.");
      }
    });
  };
  const getNewVisitorEntryTable = async (data) => {
    console.log("visitor list table", data);
    return await getVisitorEntryTableService({ ...data, societyId }, token)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getTypeofVisitor = async () => {
    console.log("get type of visitor ");

    return await getvisitorEntryService(token)
      .then((res) => {
        console.log("res visitor entry handler", res);

        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    getTypeofVisitor,
    fetchVisitorRelationship,
    createNewVisitorEntry,
    getNewVisitorEntryTable,
  };
};

export default VisitEntryHandler;