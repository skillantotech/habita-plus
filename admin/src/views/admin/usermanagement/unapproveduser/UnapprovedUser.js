import React, { useEffect, useState } from "react";
import { FaCheck, FaSearch, FaEye, FaTrashAlt } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import ReusableTable from "../../../../components/shared/ReusableTable";
import UserHandler from "../../../../handlers/UserHandler";


const UnapprovedUser = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [transformedData, setTransformedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);

 const { getResidentBySocietyIdHandler } = UserHandler();

  const paths = ["User", "Unapproved Users"];
  const Heading = ["Unapproved Users"];

  useEffect(() => {
    const fetchUnapprovedUserList = async () => {
      try {
        const result = await getResidentBySocietyIdHandler({ page, pageSize });
        console.log("API Result:", result);  // Check the structure of the result

        if (result && result.data) {
          setTransformedData(result.data);  // Make sure result.data is the user list
          setTotal(result.total || 0);  // Ensure total is set correctly
          setTotalPages(result.totalPages || 1);  // Provide a fallback value for totalPages
        } else {
          console.error("API response does not contain 'data'");
        }
      } catch (err) {
        console.error("Error fetching unapproved users: ", err);
      }
    };
    fetchUnapprovedUserList();
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
    { Header: "Email", accessor: "email" },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <div className="flex space-x-4">
          <button
            className="text-green-600 hover:text-green-700"
            onClick={() => handleUnapproved(row.original.id)}
          >
            <FaCheck className="text-sm" />
          </button>
          <button
            className="text-yellow-500 hover:text-yellow-700"
            onClick={() => handleView(row.original.id)}
          >
            <FaEye className="text-sm" />
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(row.original.id)}
          >
            <FaTrashAlt className="text-sm" />
          </button>
        </div>
      ),
    },
  ];

  const handleUnapproved = (id) => {
    console.log("Approve user with ID:", id);
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
            totalPages={totalPages} // Should be set correctly now
            setPageIndex={setPage}
            setPageSize={setPageSize}
          />
        </div>
      </div>
    </div>
  );
};

export default UnapprovedUser;
