// import React from "react";
// import { FaUsers, FaBuilding } from "react-icons/fa";
// import UrlPath from "../../../../components/shared/UrlPath";

// const DashboardUser = () => {
//     const paths = ["User", "Add"];
//   return (
//  <div className="px-5 ">
//       <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
//         <UrlPath paths={paths} />
//       </div>
//     <div className="max-w-md mx-auto p-2 bg-white shadow-md rounded-xl">
//       <h2 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">Units & Users</h2>

//       <div className="grid grid-cols-2 gap-4">
//         {/* Unique Users */}
//         <div className="flex items-center">
//           <FaUsers className="text-2xl text-gray-700 mr-3" />
//           <div>
//             <h3 className="text-xl font-bold">187</h3>
//             <p className="text-sm text-gray-500">Unique Users</p>
//             <p className="text-xs text-gray-400">3 Unapproved Users</p>
//             <p className="text-xs text-gray-400">4 Admins</p>
//             <p className="text-xs text-gray-400">11 Never Logged In</p>
//           </div>
//         </div>

//         {/* Total Units */}
//         <div className="flex items-center">
//           <FaBuilding className="text-2xl text-gray-700 mr-3" />
//           <div>
//             <h3 className="text-xl font-bold">90</h3>
//             <p className="text-sm text-gray-500">Total Units</p>
//           </div>
//         </div>
//       </div>
//     </div>
 
//   </div>
//    );
// };

// export default DashboardUser;
import React, { useEffect, useState } from "react";
import { FaUsers, FaBuilding } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import UserHandler from "../../../../handlers/UserHandler";
import { useSelector } from "react-redux";

const DashboardUser = () => {
  const paths = ["User", "Add"];
  const { getAllApprovedUserDataHandler, getResidentBySocietyIdHandler } = UserHandler();
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user?.Customer?.customerId);

  const [approvedUsersCount, setApprovedUsersCount] = useState(0);
  const [unapprovedUsersCount, setUnapprovedUsersCount] = useState(0);

  useEffect(() => {
    if (societyId && token) {
      fetchUserCounts();
    }
  }, [societyId, token]);

  const fetchUserCounts = async () => {
    try {
      const approvedUsers = await getAllApprovedUserDataHandler(societyId, token, { page: 0, pageSize: 1000 });
      const unapprovedUsers = await getResidentBySocietyIdHandler(societyId, token, { page: 0, pageSize: 1000 });

      setApprovedUsersCount(approvedUsers?.length || 0);
      setUnapprovedUsersCount(unapprovedUsers?.length || 0);
    } catch (error) {
      console.error("Error fetching user counts:", error);
    }
  };

  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <div className="max-w-md mx-auto p-2 bg-white shadow-md rounded-xl">
        <h2 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">Units & Users</h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Unique Users */}
          <div className="flex items-center">
            <FaUsers className="text-2xl text-gray-700 mr-3" />
            <div>
              <h3 className="text-xl font-bold">{approvedUsersCount + unapprovedUsersCount}</h3>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-xs text-gray-400">{unapprovedUsersCount} Unapproved Users</p>
              <p className="text-xs text-gray-400">{approvedUsersCount} Approved Users</p>
              <p className="text-xs text-gray-400">11 Never Logged In</p>
            </div>
          </div>

          {/* Total Units */}
          <div className="flex items-center">
            <FaBuilding className="text-2xl text-gray-700 mr-3" />
            <div>
              <h3 className="text-xl font-bold">90</h3>
              <p className="text-sm text-gray-500">Total Units</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
