import React, { useState } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { FaEye, FaTrashAlt } from "react-icons/fa";

const VisitorList = () => {
  const originalData = React.useMemo(
    () => [
      {
        id: 1,
        name: "Sasmita",
        phone: "9876543214",
        realtionship: "frequent visitor",
        purposeofvisit: "work",
        address: "Cuttack",
        entrydate: "02-12-2024",
      },
      {
        id: 2,
        name: "Subhashree",
        phone: "8637237481",
        realtionship: "one type visitor",
        purposeofvisit: "work",
        address: "Bhubaneswar",
        entrydate: "02-12-2024",
      },
    ],
    []
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(originalData);

  // Define table columns
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Relationship", accessor: "realtionship" },
      { Header: "Purpose Of Visit", accessor: "purposeofvisit" },
      { Header: "Address", accessor: "address" },
      { Header: "Entry Date", accessor: "entrydate" },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex gap-2">
            <button
              onClick={() => handleView(row.original)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEye />
            </button>
            <button
              onClick={() => handleDelete(row.original)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrashAlt />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  // Handlers
  const handleSearch = () => {
    const filtered = originalData.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleView = (row) => alert(`Viewing details for: ${row.name}`);
  const handleDelete = (row) => alert(`Deleting details for: ${row.name}`);

  return (
    <div className="p-6">
      <h3 className="mb-4 text-2xl font-bold">Customer List</h3>

      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table
          className="w-full border border-collapse border-gray-200 table-auto"
          {...getTableProps()}
        >
          <thead className="bg-gray-100">
            {headerGroups.map((headerGroup, headerIndex) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerIndex}>
                {headerGroup.headers.map((column, colIndex) => (
                  <th
                    className="px-4 py-2 text-left border border-gray-200"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={colIndex}
                  >
                    {column.render("Header")}
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id || rowIndex} className="hover:bg-gray-50">
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      className="px-4 py-2 border border-gray-200"
                      {...cell.getCellProps()}
                      key={cellIndex}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={previousPage}
          disabled={!canPreviousPage}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {pageIndex + 1} of {pageCount}
        </span>
        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VisitorList;
