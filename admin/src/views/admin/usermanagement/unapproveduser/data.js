import React, { useEffect, useState } from "react";
import { FaCheck, FaSearch, FaEye, FaTimes } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import ReusableTable from "../../../../components/shared/ReusableTable";
import UserHandler from "../../../../handlers/UserHandler";
import { useSelector } from "react-redux";

import toast from "react-hot-toast";
import Input from "../../../../components/shared/Input";

import ViewUserAllDetailsModal from "../deactivateuser/ViewUserAllDetailsModal";

const UnapprovedUser = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [transformedData, setTransformedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isUnApprovedModalOpen, setUnApprovedModal] = useState(false);

  const { getResidentBySocietyIdHandler, approveUserHandler, rejectUserHandler } = UserHandler();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    userId: "",
    unitId: "",
  });

  const paths = ["User", "Unapproved Users"];
  const Heading = ["Unapproved Users"];

  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user?.Customer?.customerId);

  useEffect(() => {
    if (societyId) {
      fetchUnapprovedUserList();
    } else {
      console.error("Society ID not found. Please check authentication state.");
    }
  }, [societyId, page, pageSize]);

  // const fetchUnapprovedUserList = async () => {
  //   try {
  //     if (!societyId || !token) {
  //       console.error("Missing societyId or token");
  //       return;
  //     }
  //     const result = await getResidentBySocietyIdHandler(societyId, token, { page, pageSize });
  //     if (result?.residents) {
  //       setTransformedData(result.residents);
  //       setTotal(result.residents.length);
  //       setTotalPages(Math.ceil(result.residents.length / pageSize));
  //     } else {
  //       console.error("Unexpected API response structure:", result);
  //     }
  //   } catch (err) {
  //     console.error("Error fetching unapproved users:", err);
  //   }
  // };

const fetchUnapprovedUserList = async () => {
  try {
    if (!societyId || !token) {
      console.error("Missing societyId or token");
      return;
    }

    const result = await getResidentBySocietyIdHandler(societyId, token, { page, pageSize });

    console.log("Fetched unapproved users:", result);

    if (result?.residents) {
      setTransformedData(result.residents);
      setTotal(result.residents.length);
      setTotalPages(Math.ceil(result.residents.length / pageSize));
    } else {
      console.error("Unexpected API response structure:", result);
    }
  } catch (err) {
    console.error("Error fetching unapproved users:", err);
  }
};

  const closeApproveModal = () => {
    setIsModalOpen(false);
    setFormData({ userId: "", unitId: "" });
  };

  // const openRejectModal = (userId) => {
  //   setFormData({ userId });
  //   setIsRejectModalOpen(true);
  // };
const openApproveModal = (userId) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    userId,
  }));
  setIsModalOpen(true);
};

const openRejectModal = (userId) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    userId,
  }));
  setIsRejectModalOpen(true);
};
  const closeRejectModal = () => {
    setIsRejectModalOpen(false);
    setFormData({ userId: "" });
  };

const handleRejectSubmit = async (e) => {
  e.preventDefault();
  if (!formData.userId) {
    toast.error("User ID is required.");
    return;
  }

  try {
    const result = await rejectUserHandler(formData.userId, token, { page, pageSize });
    if (result?.status === 200) {
      toast.success("User rejected successfully!");
      setTransformedData((prevData) =>
        prevData.filter((user) => user.userId !== formData.userId)
      );
      closeRejectModal(); 
    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    toast.error;
   
  }
};

const handleApproveSubmit = async (e) => {
  e.preventDefault();
  if (!formData.userId || !formData.unitId) {
    toast.error("User ID and Unit ID are required.");
    return;
  }

  try {
    const response = await approveUserHandler(formData.userId, formData.unitId, token);

    // Validate success response
    if (response?.status === 200) {
      toast.success("User approved successfully!");
      setTransformedData((prevData) =>
        prevData.filter((user) => user.userId !== formData.userId)
      );
      closeApproveModal();
    } else {
      // Handle unexpected responses
      toast.error;
    
    }
  } catch (error) {
    // Catch and log actual errors
    toast.error;
    
  }
};



  const columns = [
    {
      Header: "Sl. No",
      accessor: "serialNumber",
      Cell: ({ row }) => page * pageSize + row.index + 1,
    },
    { Header: "User Id", accessor: "userId" },
    { Header: "First Name", accessor: "firstName" },
    { Header: "Last Name", accessor: "lastName" },
    { Header: "Role", accessor: "roleId" },
    { Header: "Mobile No.", accessor: "mobileNumber" },
    { Header: "Email", accessor: "email" },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <div className="flex space-x-4">
          <button
            className="text-green-600 hover:text-green-700"
            onClick={() => openApproveModal(row.original.userId)}
          >
            <FaCheck className="text-lg" />
          </button>
          <button
            className="text-yellow-500 hover:text-yellow-700"
            onClick={() => viewUnapprovedData("view", row.original)}
          >
            <FaEye className="text-lg" />
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => openRejectModal(row.original.userId)}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
      ),
    },
  ];

  const viewUnapprovedData = (type, user) => {
    setUnApprovedModal(type);
    setSelectedUser(user);
  };

  const closeViewModal = () => {
    setUnApprovedModal(false);
    setSelectedUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <UrlPath paths={paths} />
      <div className="flex">
        <div className="w-full">
          <PageHeading heading={Heading} />
          <div className="flex flex-row font-sans text-lg font-medium text-gray-700">
            TOTAL {total} USERS
          </div>

          <div className="flex flex-row mt-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-4 border w-full border-gray-300 rounded-md focus:outline-none mb-4"
              />
              <FaSearch className="absolute right-7 top-5 text-lg text-gray-500" />
            </div>
          </div>

          <ReusableTable
            columns={columns}
            data={transformedData}
            pageIndex={page}
            pageSize={pageSize}
            totalCount={total}
            totalPages={totalPages}
            setPageIndex={setPage}
            setPageSize={setPageSize}
          />

          {/* Approve User Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Approve User</h2>
                <form onSubmit={handleApproveSubmit}>
                  <Input
                    label={
                      <div>
                        User Id <span className="text-red-500">*</span>
                      </div>
                    }
                    type="text"
                    placeholder="Enter User Id"
                    size="lg"
                    name="userId"
                    value={formData.userId}
                    readOnly
                  />
                  <Input
                    label={
                      <div>
                        Unit Id <span className="text-red-500">*</span>
                      </div>
                    }
                    type="text"
                    placeholder="Enter Unit Id"
                    size="lg"
                    name="unitId"
                    value={formData.unitId}
                    onChange={handleChange}
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={closeApproveModal}
                      className="mr-2 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Reject User Modal */}
          {isRejectModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Reject User</h2>
                <form onSubmit={handleRejectSubmit}>
                  <Input
                    label={
                      <div>
                        User Id <span className="text-red-500">*</span>
                      </div>
                    }
                    type="text"
                    placeholder="Enter User Id"
                    name="userId"
                    value={formData.userId}
                    readOnly
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={closeRejectModal}
                      className="mr-2 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* View Unapproved User Details Modal */}
          {isUnApprovedModalOpen && (
            <ViewUserAllDetailsModal
              isOpen={isUnApprovedModalOpen}
              onClose={closeViewModal}
              formData={selectedUser}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UnapprovedUser;



// import { React, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaCar } from "react-icons/fa";
// import UrlPath from "../../../../components/shared/UrlPath";
// import PageHeading from "../../../../components/shared/PageHeading";

// const UnapprovedUser = () => {
//   const paths = ["User", "unapproved Users"];
//   const Heading = ["Unapproved Users"];
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [remark, setRemark] = useState("");

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Remark Submitted:", remark);
//     // Add your submit logic here (e.g., API call)
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="">
//       <UrlPath paths={paths} />
//       <div className="flex">
//         <div className="w-full">
//           <PageHeading heading={Heading} />
//           <div className="flex flex-row font-sans text-lg font-medium text-gray-700">
//             TOTAL 120 UNITS AND 190 USERS
//           </div>
//           <div className="flex mt-[35px]">
//             <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
//               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs bg-lime text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                   <tr>
//                     <th scope="col" className="px-6 py-3">
//                       First Name
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Last Name
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Role
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Mobile
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Email
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Action
//                     </th>
//                     {/* <th scope="col" className="px-6 py-3">
//                       Remark
//                     </th> */}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                     <td className="px-6 py-4">Joseph</td>
//                     <td className="px-6 py-4">Stalin</td>
//                     <td className="px-6 py-4">Tenant</td>
//                     <td className="px-6 py-4">8798766756</td>
//                     <td className="px-6 py-4">joseph@gmail.com</td>
//                     <td className="px-6 py-4">
//                       <button
//                         type="button"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                         onClick={openModal}
//                       >
//                         Approved
//                       </button>
//                       <button
//                         type="button"
//                         className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
//                         onClick={openModal}
//                       >
//                         Reject
//                       </button>
//                       <button
//                         type="button"
//                         className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
//                       >
//                         View
//                       </button>
//                     </td>
//                     {/* <td className="px-6 py-4"></td> */}
//                   </tr>
//                   <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                     <td className="px-6 py-4">Tom</td>
//                     <td className="px-6 py-4">Steve</td>
//                     <td className="px-6 py-4">Tenant</td>
//                     <td className="px-6 py-4">8798766756</td>
//                     <td className="px-6 py-4">tom@gmail.com</td>
//                     <td className="px-6 py-4">
//                       <button
//                         type="button"
//                         onClick={openModal}
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                       >
//                         Approved
//                       </button>
//                       <button
//                         type="button"
//                         onClick={openModal}
//                         className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
//                       >
//                         Reject
//                       </button>
//                       <button
//                         type="button"
//                         className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {/* Modal */}
//           {isModalOpen && (
//             <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//               <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//                 <h2 className="text-xl font-bold mb-4">Enter Remark</h2>
//                 <form onSubmit={handleSubmit}>
//                   <textarea
//                     value={remark}
//                     onChange={(e) => setRemark(e.target.value)}
//                     placeholder="Enter your remark"
//                     rows="4"
//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
//                   />
//                   <div className="flex justify-end mt-4">
//                     <button
//                       type="button"
//                       onClick={closeModal}
//                       className="mr-2 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UnapprovedUser;