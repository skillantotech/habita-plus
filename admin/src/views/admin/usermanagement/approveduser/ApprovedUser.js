import React, { useEffect, useState } from "react";
import { FaSearch, FaEye, FaTimes } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import ReusableTable from "../../../../components/shared/ReusableTable";
import UserHandler from "../../../../handlers/UserHandler";
import { useSelector } from "react-redux";

const ApprovedUser = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [transformedData, setTransformedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);

  const { getAllApprovedUserDataHandler } = UserHandler();
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user?.Customer?.customerId);

  const paths = ["User", "Approved Users"];
  const Heading = ["Approved Users"];

  useEffect(() => {
    if (societyId && page >= 0 && pageSize > 0) {
      fetchApprovedUserList();
    } else {
      console.error("Invalid parameters: Ensure societyId, page, and pageSize are valid.");
    }
  }, [societyId, page, pageSize]);

  const fetchApprovedUserList = async () => {
    try {
      if (!societyId || !token) {
        console.error("Missing societyId or token");
        return;
      }

      const result = await getAllApprovedUserDataHandler(societyId, token, { page, pageSize });

      if (result && Array.isArray(result.users)) {
        setTransformedData(result.users);
        setTotal(result.total || result.users.length); // Use total if available, else fallback to length
        setTotalPages(Math.ceil((result.total || result.users.length) / pageSize));
      } else {
        console.error("Unexpected API response structure:", result);
      }
    } catch (err) {
      console.error("Error fetching approved users:", err);
    }
  };

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
  { Header: "Status", accessor: "status" },
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
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDelete(row.original.id)}
        >
          <FaTimes className="text-lg" />
        </button>
      </div>
    ),
  },
];
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

export default ApprovedUser;
