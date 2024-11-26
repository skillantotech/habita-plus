import React, { useEffect, useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import {
  MdBlock,
  MdDelete,
  MdEdit,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoMdEye } from "react-icons/io";

import NoticeHandler from "../../../../handlers/NoticeHandler";
import UpdateNoticeDetailsModal from "./UpdateNoticeDetailsModal";
import UserGroupHandler from "../../../../handlers/UseGroupHandler";
import ViewNoticeDetailsModal from "./ViewNoticeDetailsModal";

const NoticeList = () => {
  const paths = ["users", "Notice List"];
  const Heading = ["Notice List"];
  const [notices, setNotices] = useState([]);
  const { getNoticeHandler, deleteNoticeByIdHandler, updateNoticeHandler } =
    NoticeHandler();
  const { getUserGroupHandler } = UserGroupHandler();
  const [page, setPage] = useState(0); // Start from page 1
  const [pageSize, setPageSize] = useState(5); // Default to 5 items per page
  const [totalNotices, setTotalNotices] = useState(0); // Total number of notices
  const [disscussionheading, setDisscussionheading] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [userGroupId, setUserGroupId] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const result = await getNoticeHandler({
          page,
          pageSize,
          disscussionheading,
          userGroupId,
        });
        console.log(result.data);

        setNotices(result.data.data); // Notices for the current page
        setTotalNotices(result.data.total); // Total number of notices
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchNotices();

    const getUserGroup = async () => {
      try {
        const result = await getUserGroupHandler();
        console.log("all user", result);
        setSelectedOption(result.data.data);
        // setNotices(result.data.data); // Notices for the current page
        // setTotalNotices(result.data.total); // Total number of notices
      } catch (err) {
        console.error(err.message);
      }
    };
    getUserGroup();
  }, [page, pageSize, disscussionheading, userGroupId]);

  const totalPages = Math.ceil(totalNotices / pageSize); // Calculate total pages

  const handleSearchChange = (e) => {
    setDisscussionheading(e.target.value);
  };

  const startNotice = (page - 1) * pageSize + 1;
  const endNotice = Math.min(page * pageSize, totalNotices);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    console.log(option);

    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const handleDelete = (id) => {
    deleteNoticeByIdHandler(id)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setNotices((prev) => prev.filter((el) => el.noticeId !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // update states and functions
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const toggleUpdateNoticeDetailModal = () => {
    setShowUpdateModal((prev) => !prev);
  };

  const onEditHandler = (noticeId) => {
    const findNoticeData = notices.find(
      (element) => element.noticeId == noticeId
    );

    setUpdateFormData(findNoticeData);
    toggleUpdateNoticeDetailModal();
  };

  const onSubmitEdit = (formData) => {
    // code for updaating notice
    console.log("hfhdh", formData);
    updateNoticeHandler(formData);
    toggleUpdateNoticeDetailModal();
  };

  const handleSelectGroupId = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);
    setUserGroupId(value);
  };

  // on view Handler
  const [viewmodal, setViewModal] = useState(false);
  const [showViewFormData, setShowViewFormData] = useState(null);

  const toggleViewNoticeDetailModal = () => {
    setViewModal((prev) => !prev); // Toggle modal visibility
  };

  const onViewHandler = (noticeId) => {
    const viewNoticeData = notices.find(
      (element) => element.noticeId == noticeId
    );
    setShowViewFormData(viewNoticeData); // Set the selected notice data to view
    setViewModal(true); // Open the modal
  };

  return (
    <div className="relative">
      <UrlPath paths={paths} />
      <div className="flex">
        <div className="w-full">
          <PageHeading heading={Heading} />
          <div className="flex flex-row font-sans text-lg font-medium text-gray-700">
            TOTAL {totalNotices} NOTICES
          </div>

          {/* Filter Dropdown */}
          <div className="flex flex-row justify-end mr-[30px] ">
            {/* <FaFilter
              className="text-[15px] cursor-pointer"
              onClick={toggleDropdown}
            /> */}

            {/* {isDropdownOpen && ( */}
            {/* <div className="  mt-2 bg-white border rounded shadow-lg w-[150px] "> */}
            <select
              name="userGroupId"
              onChange={handleSelectGroupId}
              className="py-2"
            >
              <option
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                value=""
                // onClick={() => handleOptionSelect(e.target.value)}
              >
                Select Option
              </option>
              {selectedOption.map((item) => {
                return (
                  <option
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    value={item.userGroupId}
                  >
                    {item.userGroupName}
                  </option>
                );
              })}
            </select>
            {/* </div> */}
            {/* )} */}
          </div>

          {/* Search Bar */}
          <div className="flex flex-row mt-4">
            <div className="relative w-full">
              <input
                type="text"
                onChange={handleSearchChange}
                placeholder="Search by Discussion Heading..."
                className="px-4 py-4 border w-full border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notice List */}
      {notices.length > 0 &&
        notices.map((el) => (
          <div key={el.noticeId}>
            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex flex-col relative p-4 bg-gray-100 shadow-md rounded-lg">
                <div className="text-xl font-semibold text-gray-800">
                  {el.noticeHeading}
                </div>
                <div className="absolute right-2 top-2 flex flex-row gap-2">
                  <IoMdEye
                    className="text-lg text-gray-700 hover:text-yellow-700"
                    onClick={() => onViewHandler(el.noticeId)}
                  />

                  <MdEdit
                    className="text-lg text-gray-700 hover:text-green-700"
                    onClick={() => onEditHandler(el.noticeId)}
                  />
                  <MdDelete
                    className="text-lg text-gray-700 hover:text-red-700"
                    onClick={() => handleDelete(el.noticeId)}
                  />
                </div>
                <div className="text-gray-600 mt-2">{el.noticeDescription}</div>
                <div className="absolute right-2 bottom-2 text-gray-500 mt-2">
                  Expired Date{" "}
                  {new Date(el.noticeExpireDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Pagination Controls */}
      <div className="flex flex-row items-center justify-between mt-4">
        <div className="flex gap-5 items-center">
          {page > 1 && (
            <button
              className="border rounded bg-turquoise p-2"
              onClick={() => setPage(1)}
            >
              <MdKeyboardDoubleArrowLeft />
            </button>
          )}
          {page > 1 && (
            <button
              className="border rounded bg-turquoise p-2"
              onClick={() => setPage((prev) => prev - 1)}
            >
              <SlArrowLeft />
            </button>
          )}
          {page < totalPages && (
            <button
              className="border rounded bg-turquoise p-2"
              onClick={() => setPage((prev) => prev + 1)}
            >
              <SlArrowRight />
            </button>
          )}
          {page < totalPages && (
            <button
              className="border rounded bg-turquoise p-2"
              onClick={() => setPage(totalPages)}
            >
              <MdKeyboardDoubleArrowRight />
            </button>
          )}
        </div>

        {/* Display current notice range / total notices */}
        <div className="text-gray-700">
          Showing {startNotice} - {endNotice} of {totalNotices}
        </div>

        {/* Page size dropdown */}
        <select
          className="border border-black"
          value={pageSize}
          onChange={(event) => setPageSize(Number(event.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      {showUpdateModal && (
        <UpdateNoticeDetailsModal
          isOpen={showUpdateModal}
          onClose={toggleUpdateNoticeDetailModal}
          formData={updateFormData}
          onEditHandler={onSubmitEdit}
        />
      )}

      {viewmodal && (
        <ViewNoticeDetailsModal
          isOpen={viewmodal} // Modal open state
          onClose={toggleViewNoticeDetailModal} // Close modal handler
          formData={showViewFormData} // The data to display in the modal
        />
      )}
    </div>
  );
};

export default NoticeList;
