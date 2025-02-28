import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import ReusableTable from "../../../../components/shared/ReusableTable";
import FacilityHandler from "../../../../handlers/FacilityHandler";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import ViewFacilityDetailsModal from "./ViewFacilityDetailsModal";
import UpdateFacilityDetailsModal from "./UpdateFacilityDetailsModal ";
import toast from "react-hot-toast";

const FacilityListTable = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [transformedData, setTransformedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [viewModal, setViewModal] = useState(false);
  const [showViewFormData, setShowViewFormData] = useState(null);

  const { getFacilityHandler, deleteFacilityByIdHandler, updateFacilityHandler } = FacilityHandler();

  useEffect(() => {
    fetchFacilityList();
  }, [page, pageSize]);

  const fetchFacilityList = async () => {
    try {
      const result = await getFacilityHandler();
      console.log("Fetched Data:", result); // Debugging the API response

      if (result?.data) {
        setTransformedData(result.data.data || []);
        setTotal(result.data.total || 0);
        setTotalPages(result.data.totalPages || 0);
      } else {
        setTransformedData([]);
      }
    } catch (err) {
      console.error("Error fetching facility list:", err);
      setTransformedData([]);
    }
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const toggleUpdateFacilityDetailModal = () => {
    setShowUpdateModal((prev) => !prev);
  };

  const handleEditFacility = (facilityId) => {
    console.log("Facility ID:", facilityId);
    const findFacilityData = transformedData.find((element) => element.facilityId === facilityId);
    console.log("Found Facility Data:", findFacilityData);

    if (findFacilityData) {
      setUpdateFormData(findFacilityData);
      toggleUpdateFacilityDetailModal();
    } else {
      toast.error("Facility data not found!");
    }
  };

  const onSubmitEdit = async (formData) => {
    try {
      await updateFacilityHandler(formData);
      toggleUpdateFacilityDetailModal();
      fetchFacilityList(); // Refresh list after update
    } catch (err) {
      console.error("Error updating facility:", err);
    }
  };

  const handleDeleteFacility = async (id) => {
    try {
      const response = await deleteFacilityByIdHandler(id);
      if (response) {
        setTransformedData((prev) => prev.filter((el) => el.facilityId !== id));
        toast.success("Facility deleted successfully!");
      }
    } catch (err) {
      console.error("Error deleting facility:", err);
      toast.error("Failed to delete facility.");
    }
  };

  const columns = [
    { Header: "Sl. No", accessor: "serialNumber", Cell: ({ row }) => page * pageSize + row.index + 1 },
    { Header: "Facility Id", accessor: "facilityId" },
    { Header: "Name", accessor: "facilityName" },
    { Header: "Type", accessor: "facilityType" },
    { Header: "Usage", accessor: "facilityUsage" },
    {
      Header: "Booking From",
      accessor: "bookingFrom",
      Cell: ({ value }) => (value ? format(new Date(value), "dd-MM-yyyy") : "N/A"),
    },
    {
      Header: "Booking To",
      accessor: "bookingTo",
      Cell: ({ value }) => (value ? format(new Date(value), "dd-MM-yyyy") : "N/A"),
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <div className="flex space-x-4">
          <button className="text-green-500 hover:text-green-700" onClick={() => handleEditFacility(row.original.facilityId)}>
            <FaEdit className="text-lg" />
          </button>
          <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteFacility(row.original.facilityId)}>
            <FaTrashAlt className="text-lg" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <strong>Facility List</strong>

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

      <ViewFacilityDetailsModal isOpen={viewModal} onClose={() => setViewModal(false)} formData={showViewFormData} />

      {showUpdateModal && (
        <UpdateFacilityDetailsModal
          isOpen={showUpdateModal}
          onClose={toggleUpdateFacilityDetailModal}
          formData={updateFormData}
          handleEditFacility={onSubmitEdit}
        />
      )}
    </div>
  );
};

export default FacilityListTable;
