import React, { useEffect, useState } from "react";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import DefineUnitHandler from "../../../../handlers/DefineUnitHandler";
import ReusableTable from "../../../../components/shared/ReusableTable";

const UnitList = () => {
  const paths = ["users", "Unit List"];
  const Heading = ["Unit List"];

  // Pagination states
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [data, setData] = useState([]);

  const { getUnitsHandler } = DefineUnitHandler();

  const transformUnitsData = (data) => {
    return data.map((element) => {
      return {
        ...element,
        createdAt: new Date(element.createdAt).toLocaleDateString(),
        floorName: element.floor.floorName,
        unitType: element.unitType.unitTypeName,
      };
    });
  };

  useEffect(() => {
    getUnitsHandler({ page: pageIndex, limit: pageSize })
      .then((res) => {
        console.log(res.data.data);
        setData(transformUnitsData(res.data.data));
        setTotalCount(res.data.total);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [pageIndex, pageSize]);

  const columns = [
    { Header: "UNIT NAME", accessor: "unitName" },
    { Header: "Unit Number", accessor: "unitNumber" },
    { Header: "Unit Size", accessor: "unitsize" },
    { Header: "Floor Name", accessor: "floorName" },
    { Header: "Unit Type", accessor: "unitType" },
  ];

  return (
    <div className="">
      <UrlPath paths={paths} />
      <div className="flex">
        <div className="w-full">
          <PageHeading heading={Heading} />
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
  );
};

export default UnitList;
