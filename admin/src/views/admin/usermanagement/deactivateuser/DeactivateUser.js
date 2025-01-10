import React, { useEffect, useState } from "react";
import { FaCheck, FaSearch, FaEye, FaTimes, FaCross } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import ReusableTable from "../../../../components/shared/ReusableTable";
// import ApproveHandler from '../../../../handlers/user_management/ApproveHandler';

const DeactivateUser = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [transformedData, setTransformedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);

  // const { getUnapprovedUserHandler, approveUserHandler } = ApproveHandler();

  const paths = ["User", "Deactivate Users"];
  const Heading = ["Deactivate Users"];

  useEffect(() => {
    const fetchDeactiveUserList = async () => {
      try {
        const result = await getDeactivateUserHandler({ page, pageSize });
        if (result && result.data) {
          setTransformedData(result.data);
          setTotal(result.total || 0);
          setTotalPages(result.totalPages || 1);
        } else {
          console.error("API response does not contain 'data'");
        }
      } catch (err) {
        console.error("Error fetching deactivate users:", err);
      }
    };
    fetchDeactiveUserList();
  }, [page, pageSize]);

  const columns = [
    {
      Header: "Sl. No",
      accessor: "serialNumber",
      Cell: ({ row }) => page * pageSize + row.index + 1,
    },
    { Header: "First Name", accessor: "firstName" },
    { Header: "Last Name", accessor: "lastName" },
    { Header: "Role", accessor: "roleId" },
    { Header: "Mobile No.", accessor: "mobileNumber" },
    { Header: "Unit No", accessor: "unitno" },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <div className="flex space-x-4">
         
          <button
            className="text-yellow-500 hover:text-yellow-700"
            onClick={() => handleView(row.original.id)}
          >
            <FaEye className="text-lg" />
          </button>
          <button
            className="text-green-500 hover:text-green-700"
            onClick={() => handleDelete(row.original.id)}
          >
            <FaCheck className="text-lg" />
          </button>
        </div>
      ),
    },
  ];

  const handleApproveUser = async (id, unitId) => {
    try {
      const result = await approveUserHandler(id, unitId);
      console.log("User approved successfully:", result);
      // Refresh the unapproved user list
      fetchApprovedUserList();
    } catch (err) {
      console.error("Failed to approve user:", err);
    }
  };

  const handleView = (id) => {
    console.log("View user details with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete user with ID:", id);
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
        </div>
      </div>
    </div>
  );
};

export default DeactivateUser;
