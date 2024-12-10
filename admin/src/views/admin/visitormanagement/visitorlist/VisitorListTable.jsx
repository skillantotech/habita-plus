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

  const columns = [
    { Header: "Name", accessor: "visit_name" },
    { Header: " Date of Entry", accessor: "visit_expect_date_of_entry_date" },
    { Header: "Mobile No.", accessor: "visit_mobileno" },
    { Header: "Status", accessor: "status" },
    // { Header: "SLNo", accessor:""},
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
      <strong> Approvd Visitor LIst</strong>
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
