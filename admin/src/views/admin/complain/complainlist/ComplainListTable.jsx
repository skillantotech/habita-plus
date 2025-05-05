// import React, { useEffect, useMemo, useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";
// import { FiEye } from "react-icons/fi";
// import ReusableTable from "../../../../components/shared/ReusableTable";


// const ComplainListTable = () => {
//   const [complains, setComplains] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [pageIndex, setPageIndex] = useState(0);
//   const [pageSize, setPageSize] = useState(5);

//   useEffect(() => {
//     const fetchComplains = async () => {
//       setLoading(true);
//       try {
//         // const res = await ComplainHandler().getComplains();
//         // setComplains(res.data);
//         setComplains([
//           {
//             complainId: 1,
//             title: "Broken Lift",
//             date: "2024-04-01",
//             status: "Pending",
//             assignedTo: "John Doe",
//           },
//           {
//             complainId: 2,
//             title: "Water Leakage",
//             date: "2024-04-03",
//             status: "In Progress",
//             assignedTo: "Jane Smith",
//           },
//         ]);
//       } catch (err) {
//         console.error("Failed to fetch complains", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchComplains();
//   }, []);

//   const pagedComplains = useMemo(() => {
//     const start = pageIndex * pageSize;
//     return [...complains].slice(start, start + pageSize);
//   }, [pageIndex, pageSize, complains]);

//   const totalPages = Math.ceil(complains.length / pageSize);

//   const handleDelete = async (complainId) => {
//     if (window.confirm("Are you sure you want to delete this complaint?")) {
//       // const res = await ComplainHandler().deleteComplain(complainId);
//       // if (res?.status === 200) {
//       setComplains((prev) =>
//         prev.filter((c) => c.complainId !== complainId)
//       );
//       // }
//     }
//   };

//   const handleStatusChange = (complainId, newStatus) => {
//     setComplains((prev) =>
//       prev.map((c) =>
//         c.complainId === complainId ? { ...c, status: newStatus } : c
//       )
//     );
//     // Optionally update status in backend
//   };

//   const columns = useMemo(
//     () => [
//       {
//         Header: "S.No",
//         Cell: ({ row }) => complains.length - (pageIndex * pageSize + row.index),
//         className: "text-center",
//       },
//       {
//         Header: "Title",
//         accessor: "title",
//         className: "text-left",
//       },
//       {
//         Header: "Date",
//         accessor: "date",
//         Cell: ({ value }) => new Date(value).toLocaleDateString(),
//         className: "text-center",
//       },
//       {
//         Header: "Status",
//         accessor: "status",
//         Cell: ({ row }) => (
//           <select
//             value={row.original.status}
//             onChange={(e) =>
//               handleStatusChange(row.original.complainId, e.target.value)
//             }
//             className="border rounded px-2 py-1 text-sm"
//           >
//             <option>Pending</option>
//             <option>In Progress</option>
//             <option>Resolved</option>
//           </select>
//         ),
//         className: "text-center",
//       },
//       {
//         Header: "Assigned Complaint",
//         accessor: "assignedTo",
//         className: "text-left",
//       },
//       {
//         Header: "Actions",
//         Cell: ({ row }) => (
//           <div className="flex items-center gap-2">
//             <button
//               title="View"
//               className="text-blue-600 hover:text-blue-800"
//             >
//               <FiEye size={18} />
//             </button>
//             <button
//               onClick={() => handleDelete(row.original.complainId)}
//               title="Delete"
//               className="text-red-600 hover:text-red-800"
//             >
//               <FaTrashAlt size={16} />
//             </button>
//           </div>
//         ),
//         className: "text-left",
//       },
//     ],
//     [pageIndex, pageSize, complains]
//   );

//   return (
//     <div className="relative px-4 py-6">
//       <div className="flex justify-between items-center mt-4">
//         <div className="font-medium text-gray-700 text-lg">
//           TOTAL {complains.length} COMPLAINTS
//         </div>
//       </div>

//       <div className="mt-6 overflow-x-auto">
//         <ReusableTable
//           columns={columns}
//           data={pagedComplains}
//           pageIndex={pageIndex}
//           pageSize={pageSize}
//           totalCount={complains.length}
//           totalPages={totalPages}
//           setPageIndex={setPageIndex}
//           setPageSize={setPageSize}
//           loading={loading}
//         />
//       </div>
//     </div>
//   );
// };

// export default ComplainListTable;


import React, { useEffect, useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import ReusableTable from "../../../../components/shared/ReusableTable";

const ComplainListTable = () => {
  const [complains, setComplains] = useState([]);
  const [filteredComplains, setFilteredComplains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchComplains = async () => {
      setLoading(true);
      try {
        // const res = await ComplainHandler().getComplains();
        // setComplains(res.data);
        const dummyData = [
          {
            complainId: 1,
            title: "Broken Lift",
            date: "2024-04-01",
            status: "Pending",
            assignedTo: "John Doe",
          },
          {
            complainId: 2,
            title: "Water Leakage",
            date: "2024-04-03",
            status: "In Progress",
            assignedTo: "Jane Smith",
          },
        ];
        setComplains(dummyData);
        setFilteredComplains(dummyData);
      } catch (err) {
        console.error("Failed to fetch complains", err);
      } finally {
        setLoading(false);
      }
    };
    fetchComplains();
  }, []);

  const handleSearch = () => {
    const filtered = complains.filter((c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComplains(filtered);
    setPageIndex(0); // reset pagination
  };

  const pagedComplains = useMemo(() => {
    const start = pageIndex * pageSize;
    return [...filteredComplains].slice(start, start + pageSize);
  }, [pageIndex, pageSize, filteredComplains]);

  const totalPages = Math.ceil(filteredComplains.length / pageSize);

  const handleDelete = async (complainId) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      setComplains((prev) => prev.filter((c) => c.complainId !== complainId));
      setFilteredComplains((prev) =>
        prev.filter((c) => c.complainId !== complainId)
      );
    }
  };

  const handleStatusChange = (complainId, newStatus) => {
    const updated = complains.map((c) =>
      c.complainId === complainId ? { ...c, status: newStatus } : c
    );
    setComplains(updated);
    const filtered = updated.filter((c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComplains(filtered);
  };

  const columns = useMemo(
    () => [
      {
        Header: "S.No",
        Cell: ({ row }) =>
          filteredComplains.length - (pageIndex * pageSize + row.index),
        className: "text-center",
      },
      {
        Header: "Title",
        accessor: "title",
        className: "text-left",
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
        className: "text-center",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => (
          <select
            value={row.original.status}
            onChange={(e) =>
              handleStatusChange(row.original.complainId, e.target.value)
            }
            className="border rounded px-2 py-1 text-sm"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        ),
        className: "text-center",
      },
      {
        Header: "Assigned Complaint",
        accessor: "assignedTo",
        className: "text-left",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button
              title="View"
              className="text-blue-600 hover:text-blue-800"
            >
              <FiEye size={18} />
            </button>
            <button
              onClick={() => handleDelete(row.original.complainId)}
              title="Delete"
              className="text-red-600 hover:text-red-800"
            >
              <FaTrashAlt size={16} />
            </button>
          </div>
        ),
        className: "text-left",
      },
    ],
    [pageIndex, pageSize, filteredComplains]
  );

  return (
    <div className="relative px-4 py-6">
      <div className="flex justify-between items-center mt-4">
        <div className="font-medium text-gray-700 text-lg">
          TOTAL {filteredComplains.length} COMPLAINTS
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-3 py-1 rounded-md text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <ReusableTable
          columns={columns}
          data={pagedComplains}
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalCount={filteredComplains.length}
          totalPages={totalPages}
          setPageIndex={setPageIndex}
          setPageSize={setPageSize}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ComplainListTable;
