"use client";
import React, { useEffect } from "react";
import { useTable, usePagination } from "react-table";
import PropTypes from "prop-types";

const ReusableTable = ({
  columns,
  data,
  pageIndex,
  pageSize,
  totalCount,
  totalPages,
  setPageIndex,
  setPageSize,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize: internalSetPageSize,
    state: { pageIndex: internalPageIndex, pageSize: internalPageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex },
      manualPagination: true,
      pageCount: totalPages,
    },
    usePagination
  );

  useEffect(() => {
    if (gotoPage) {
      gotoPage(pageIndex);
    }
  }, [pageIndex, gotoPage]);

  useEffect(() => {
    if (internalSetPageSize) {
      internalSetPageSize(pageSize);
    }
  }, [pageSize, internalSetPageSize]);

  const onNextPage = () => {
    setPageIndex((prev) => Number(prev) + 1);
  };

  const onPreviousPage = () => {
    setPageIndex((prev) => Number(prev) - 1);
  };

  return (
    <div>
      <table
        {...getTableProps()}
        className="min-w-full border border-collapse border-gray-300 table-auto"
      >
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, colIndex) => (
                <th
                  {...column.getHeaderProps()}
                  key={colIndex}
                  className="px-4 py-2 text-sm font-medium text-left text-gray-600 border-b border-gray-300"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id || rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    key={cellIndex}
                    className="px-4 py-2 text-sm text-gray-700 border-b border-gray-300"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <button
            onClick={onPreviousPage}
            disabled={!canPreviousPage}
            className="px-3 py-1 mr-2 text-white bg-blue-500 rounded-md disabled:opacity-50"
          >
            {"<"}
          </button>
          <button
            onClick={onNextPage}
            disabled={!canNextPage}
            className="px-3 py-1 mr-2 text-white bg-blue-500 rounded-md disabled:opacity-50"
          >
            {">"}
          </button>
        </div>

        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            Page <strong>{pageIndex + 1} of {totalPages}</strong>
          </span>
          <span className="ml-4 text-sm text-gray-700">
            | Go to page:
            <input
              type="number"
              value={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                setPageIndex(page);
                gotoPage(page);
              }}
              className="w-16 ml-2 text-center border rounded-md"
            />
          </span>
        </div>

        <select
          value={internalPageSize}
          onChange={(e) => {
            const newSize = Number(e.target.value);
            setPageSize(newSize);
            internalSetPageSize(newSize);
          }}
          className="p-1 ml-4 border rounded-md"
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

ReusableTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPageIndex: PropTypes.func.isRequired,
  setPageSize: PropTypes.func.isRequired,
};

export default ReusableTable;
