import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import ReusableTable from "../../../../components/shared/ReusableTable";
import GateHandler from "../../../../handlers/GateHandler";

const GateList = () => {
  const paths = ["Gate Management", "Gate List"];
  const Heading = ["Gate List"];

  const [totalGate, setTotalGate] = useState(0)

  const [data, setData] = useState([]);

  const { getGateListHandler } = GateHandler();

  const transformGateData = (response) => {
    if (!response?.data) return 0;
    setTotalGate(response.data.length)
    return response.data.map(element => ({
      ...element,
      gateNumbar: element.gateNumber,
      gateName: element.gateName,
      // societyId: element.societyId
    }));
  };
 
  // Pagination states
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);


  const columns = [
    { Header: "GATE NO.", accessor: "gateNumbar" },
    { Header: "GATE NAME", accessor: "gateName" },
    // { Header: "SOCIETY ID", accessor: "societyId" }
  ];

  useEffect(()=>{
    getGateListHandler({ page: pageIndex, limit: pageSize })
    .then((res)=>{

      if (res && res.data) { // Check if res and res.data exist
        const transformedData = transformGateData(res.data);
        setData(transformedData);
        setTotalCount(res.data.total || 0);
        setTotalPages(res.data.totalPages || 0);
      }else{
        setData([]);
        setTotalCount(0);
        setTotalPages(0);
      }

      // setData(transformGateData(res.data));
      setTotalCount(res.data.total);
      // setTotalPages(res.data.totalPages);
    })
    .catch((error) => {
      console.error("Error fetching gate list:", error);
      setData([]);
      setTotalCount(0);
      setTotalPages(0);
      setTotalGate(0);
    });
  },[])

  return (
    <div className="">
      <UrlPath paths={paths} />
      <div className="flex">
        <div className="w-full">
          <PageHeading heading={Heading} />
          {/* <div className="flex flex-row font-sans text-2xl font-bold">
          Approved Users
        </div> */}
          <div className="flex flex-row font-sans text-lg font-medium text-gray-700">
            TOTAL {totalGate} Gates
          </div>

          <div className="flex flex-col mt-[35px] space-y-3">
            <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
              <ReusableTable
                columns={columns}
                data={data}
                pageIndex={pageIndex}
                pageSize={pageSize}
                totalCount={totalCount}
                totalPages={totalPages}
                setPageIndex={(index) => setPageIndex(index)}
                setPageSize={(size) => setPageSize(size)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateList;
