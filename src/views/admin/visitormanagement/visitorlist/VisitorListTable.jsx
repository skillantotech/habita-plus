import React, { useEffect, useState } from "react";
import Input from "../../../../components/shared/Input";
import Button from "../../../../components/ui/Button";
import ReusableTable from "../../../../components/shared/ReusableTable";
import VisitEntryHandler from "../../../../handlers/VisitorEntryHandler";


const VisitorListTable = () => {
  const [page, setPage] = useState(0); // Start from page 1
  const [pageSize, setPageSize] = useState(5); // Default to 5 items per page
  const [transformedData, setTransformedData] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [total, setTotal] = useState(null);
  const [visitorsearch, setVisitorSearch] = useState({
    startdate: "",
    enddate: "",
    status: "",
    mobileno: "",
  });

  const { getNewVisitorEntryTable } = VisitEntryHandler();

  useEffect(() => {
    const fetchVisitorList = async () => {
      try {
        const result = await getNewVisitorEntryTable({
          page,
          pageSize,
        });
        console.log(result);
        setTransformedData(
          result.data.data.map((el) => ({
            ...el,
          }))
        );
        setTotal(result.data.total);
        setTotalPages(result.data.totalPages);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchVisitorList();
  }, [page, pageSize]);

  const handleView = (id) => {
    console.log("View button clicked for ID:", id);
     alert(id);
  };

  const handleDelete = (id) => {
    console.log("Delete button clicked for ID:", id);
    alert(id);
  };
  
  const handleQrCode = (id) => {
    console.log("Delete button clicked for ID:", id);
    alert(id);
  };

  const columns = [
    { Header: "Id", accessor: "visit_entry_Id" },
    { Header: "Name", accessor: "visit_name" },
    { Header: " Date of Entry", accessor: "visit_expect_date_of_entry_date" },
    { Header: "Mobile No.", accessor: "visit_mobileno" },
    { Header: "Status", accessor: "status" },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <div className="flex space-x-4">
          {/* View Icon */}
          {/* <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => handleView(row.original.visit_entry_Id)}
          >
            <FaEye className="text-sm" /> 
          </button>

           <button
            className="text-red-300 hover:text-red-300"
            onClick={() => handleQrCode(row.original.visit_entry_Id)}
          >
            <FaQrcode className="text-sm" /> 
          </button>
    

        
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(row.original.visit_entry_Id)}
          >
            <FaTrashAlt className="text-sm" />
          </button> */}


    <div className="flex gap-2">
      <button
        className="px-2 py-1 text-xs bg-yellow-700 text-white rounded-md hover:bg-opacity-90"
          onClick={() => handleView(row.original.visit_entry_Id)}
      >
        View
      </button>
        <button
        className="px-2 py-1 text-xs bg-red-400 text-white rounded-md hover:bg-opacity-90"
         onClick={() => handleQrCode(row.original.visit_entry_Id)}
      >
        QR Generate
      </button>
      <button
        className="px-2 py-1 text-xs bg-gray-900 text-white rounded-md hover:bg-opacity-90"
         onClick={() => handleDelete(row.original.visit_entry_Id)}
      >
        Delete
      </button>
    </div>
        </div>
      ),
    },
  ];

  // search
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setVisitorSearch({ ...visitorsearch, [name]: value });
    console.log("visitorsearch", visitorsearch);
  };

  const handleSubmit = async () => {
    const result = await getNewVisitorEntryTable(visitorsearch);
    console.log(result);
    setTransformedData(result.data.data);
  };
  return (
    <div>
      <strong> Approved Visitor List</strong>
      <div className="grid grid-cols-5 gap-5 mt-5 items-center">
        <Input
          label={" Start Date"}
          type="date"
          placeholder={"Search by Start Date"}
          size={"lg"}
          name="startdate"
          onChange={handleSearchChange}
          // value={formData.startDate}
        />
        <Input
          label={" End Date"}
          type="date"
          placeholder={"Search by End Date"}
          size={"lg"}
          name="enddate"
          onChange={handleSearchChange}
          // value={}
        />
        <Input
          label={"Search By Status"}
          type="text"
          placeholder={"Search By Status"}
          size={"lg"}
          name="status"
          onChange={handleSearchChange}
        />
        <Input
          label={"Mobile No."}
          type="number"
          placeholder={"Mobile No."}
          size={"lg"}
          name="mobileno"
          onChange={handleSearchChange}
        />
        <div className="mt-[8px]">
          <Button
            className="max-w-sm"
            onClick={handleSubmit}
            type="submit"
            size="lg"
          >
            Search
          </Button>
        </div>
      </div>

      <div className="font-sans font-bold mb-[15px] text-[15px] text-lime">
        Visitor Table
      </div>

      <ReusableTable
        columns={columns}
        data={transformedData}
        pageIndex={page}
        pageSize={pageSize}
        totalCount={total}
        totalPages={totalPages}
        setPageIndex={(index) => setPage(index)}
        setPageSize={(size) => setPageSize(size)}
      />
    </div>
  );
};

export default VisitorListTable;

// import React, { useEffect, useState } from "react";
// import Input from "../../../../components/shared/Input";
// import Button from "../../../../components/ui/Button";
// import ReusableTable from "../../../../components/shared/ReusableTable";
// import VisitEntryHandler from "../../../../handlers/VisitorEntryHandler";
// import ReactQRCode from "react-qr-code"; // Import QR Code component

// const VisitorListTable = () => {
//   const [page, setPage] = useState(0); // Start from page 1
//   const [pageSize, setPageSize] = useState(5); // Default to 5 items per page
//   const [transformedData, setTransformedData] = useState([]);
//   const [totalPages, setTotalPages] = useState(null);
//   const [total, setTotal] = useState(null);
//   const [visitorsearch, setVisitorSearch] = useState({
//     startdate: "",
//     enddate: "",
//     status: "",
//     mobileno: "",
//   });
//   const [qrCodeData, setQrCodeData] = useState(null); // To store QR code data

//   const { getNewVisitorEntryTable } = VisitEntryHandler();

//   useEffect(() => {
//     const fetchVisitorList = async () => {
//       try {
//         const result = await getNewVisitorEntryTable({
//           page,
//           pageSize,
//         });
//         setTransformedData(result.data.data);
//         setTotal(result.data.total);
//         setTotalPages(result.data.totalPages);
//       } catch (err) {
//         console.error(err.message);
//       }
//     };
//     fetchVisitorList();
//   }, [page, pageSize]);

//   const handleView = (id) => {
//     alert(`View ID: ${id}`);
//   };

//   const handleDelete = (id) => {
//     alert(`Delete ID: ${id}`);
//   };

//   const handleQrCode = (id) => {
//     setQrCodeData(id); // Set the ID for QR code generation
//   };

//   const columns = [
//     { Header: "Id", accessor: "visit_entry_Id" },
//     { Header: "Name", accessor: "visit_name" },
//     { Header: "Date of Entry", accessor: "visit_expect_date_of_entry_date" },
//     { Header: "Mobile No.", accessor: "visit_mobileno" },
//     { Header: "Status", accessor: "status" },
//     {
//       Header: "Action",
//       accessor: "action",
//       Cell: ({ row }) => (
//         <div className="flex gap-2">
//           <button
//             className="px-2 py-1 text-xs bg-yellow-500 text-white rounded-md hover:bg-opacity-90"
//             onClick={() => handleView(row.original.visit_entry_Id)}
//           >
//             View
//           </button>
//           <button
//             className="px-2 py-1 text-xs bg-red-400 text-white rounded-md hover:bg-opacity-90"
//             onClick={() => handleQrCode(row.original.visit_entry_Id)}
//           >
//             QR Generate
//           </button>
//           <button
//             className="px-2 py-1 text-xs bg-gray-900 text-white rounded-md hover:bg-opacity-90"
//             onClick={() => handleDelete(row.original.visit_entry_Id)}
//           >
//             Delete
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const handleSearchChange = (e) => {
//     const { name, value } = e.target;
//     setVisitorSearch({ ...visitorsearch, [name]: value });
//   };

//   const handleSubmit = async () => {
//     const result = await getNewVisitorEntryTable(visitorsearch);
//     setTransformedData(result.data.data);
//   };

//   return (
//     <div>
//       <strong>Approved Visitor List</strong>
//       <div className="grid grid-cols-5 gap-5 mt-5 items-center">
//         <Input
//           label={"Start Date"}
//           type="date"
//           placeholder={"Search by Start Date"}
//           size={"lg"}
//           name="startdate"
//           onChange={handleSearchChange}
//         />
//         <Input
//           label={"End Date"}
//           type="date"
//           placeholder={"Search by End Date"}
//           size={"lg"}
//           name="enddate"
//           onChange={handleSearchChange}
//         />
//         <Input
//           label={"Search By Status"}
//           type="text"
//           placeholder={"Search By Status"}
//           size={"lg"}
//           name="status"
//           onChange={handleSearchChange}
//         />
//         <Input
//           label={"Mobile No."}
//           type="number"
//           placeholder={"Mobile No."}
//           size={"lg"}
//           name="mobileno"
//           onChange={handleSearchChange}
//         />
//         <div className="mt-[8px]">
//           <Button
//             className="max-w-sm"
//             onClick={handleSubmit}
//             type="submit"
//             size="lg"
//           >
//             Search
//           </Button>
//         </div>
//       </div>

//       <div className="font-sans font-bold mb-[15px] text-[15px] text-lime">
//         Visitor Table
//       </div>

//       <ReusableTable
//         columns={columns}
//         data={transformedData}
//         pageIndex={page}
//         pageSize={pageSize}
//         totalCount={total}
//         totalPages={totalPages}
//         setPageIndex={(index) => setPage(index)}
//         setPageSize={(size) => setPageSize(size)}
//       />

//       {/* Conditionally render the QR code when the user clicks the "QR Generate" button */}
//       {/* {qrCodeData && (
//         <div className="mt-4">
//           <h4 className="font-semibold text-lg">QR Code for ID: {qrCodeData}</h4>
//           <ReactQRCode value={qrCodeData} size={256} />
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default VisitorListTable;
