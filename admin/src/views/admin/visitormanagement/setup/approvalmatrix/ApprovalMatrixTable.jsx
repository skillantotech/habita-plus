import React, { useEffect, useState } from "react";
import UrlPath from "../../../../../components/shared/UrlPath";
import PageHeading from "../../../../../components/shared/PageHeading";
import Button from "../../../../../components/ui/Button";
import ReusableTable from "../../../../../components/shared/ReusableTable";
import VisitorApprovedMatrixHandler from "../../../../../handlers/VisitorApprovedMatrixHandler";

const ActionData = ({ data, updateModal, deleteModal, updateForm }) => {
  const onUpdateRelation = () => {
    // dispatch(setCustomerId(data.customerId));
    // dispatch(setFormOperationType('view'));
    updateForm(data);
    console.log(data.Visit_relation_Description);
    updateModal();
  };
  const onDeleteRelation = () => {
    // dispatch(setCustomerId(data.customerId));
    // dispatch(setFormOperationType('edit'));
    updateForm(data);

    console.log(data.Visit_relation_Description);
    deleteModal();
  };

  return (
    <div className="flex gap-2">
      <button
        className="px-2 py-1 text-xs bg-lime text-white rounded-md hover:bg-opacity-90"
        // onClick={onUpdateRelation}
      >
        update
      </button>
      <button
        className="px-2 py-1 text-xs bg-gray-900 text-white rounded-md hover:bg-opacity-90"
        // onClick={onDeleteRelation}
      >
        delete
      </button>
    </div>
  );
};

const ApprovalMatrixTable = () => {
  const paths = ["Visitor Management", "Setup", "Approval Matrix"];
  const Heading = ["Approval Matrix"];
  const [page, setPage] = useState(0); // Start from page 1
  const [pageSize, setPageSize] = useState(5); // Default to 5 items per page
  const { getVisitorAprrovalMatrix } = VisitorApprovedMatrixHandler();
  const [matrixData, setMatrixData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState(null);

  useEffect(() => {
    const fetchApprovedMatrix = async () => {
      try {
        const result = await getVisitorAprrovalMatrix({
          page,
          pageSize,
        });
        console.log(result);
        setMatrixData(
          result.data.data.map((el) => ({
            ...el,
            actions: (
              <ActionData
                data={el}
                // updateModal={() => setShowUpdateModal(true)}
                // deleteModal={() => setDeleteModal(true)}
                updateForm={setUpdateFormData}
              />
            ),
          }))
        );
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchApprovedMatrix();
  }, []);

  const columns = [
    { Header: "Management Committee", accessor: "firstName" },
    { Header: "Role", accessor: "managementDesignation" },
    { Header: "Actions", accessor: "actions" },
  ];
  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="font-sans font-bold mb-[15px] text-[15px] text-lime">
          Visitor Table
        </div>

        <ReusableTable
          columns={columns}
          data={matrixData}
          pageIndex={page}
          pageSize={pageSize}
          // totalCount={total}
          // totalPages={totalPages}
          // setPageIndex={(index) => setPage(index)}
          // setPageSize={(size) => setPageSize(size)}
        />
      </div>
    </div>
  );
};

export default ApprovalMatrixTable;
