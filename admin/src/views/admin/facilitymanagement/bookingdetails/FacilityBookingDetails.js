import React from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Button from "../../../../components/ui/Button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const FacilityBookingDetails = () => {
  const paths = ["User", "Facility Booking Details"];
  const Heading = ["Facility Booking Details"];
  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <FacilityBookingDetailSearch />
      <FacilityBookingDetailsTable />
    </div>
  );
};

export default FacilityBookingDetails;

const FacilityBookingDetailSearch = () => {
  return (
    <div className="px-10 py-5 my-5 border rounded-lg bg-gray-100">
      <div className="text-xl font-sans font-semibold text-lime">
        Search Facility Booking Request
      </div>
      <div className="grid grid-cols-4 gap-3 items-center py-4">
        <Input
          label={<div>Select Date And Time</div>}
          type="date"
          placeholder={"Serch Vendor ID"}
          size={"lg"}
        />
      </div>
    </div>
  );
};

const FacilityBookingDetailsTable = () => {
  return (
    <div className="px-10 py-5 my-5 border rounded-lg bg-gray-100">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Facility Name
              </th>
              <th scope="col" className="px-6 py-3">
                Facility Slot No
              </th>
              <th scope="col" className="px-6 py-3">
                Booking Start Date
              </th>
              <th scope="col" className="px-6 py-3">
                Booking End Date
              </th>
              <th scope="col" className="px-6 py-3">
                Facility Booked by
              </th>
              <th scope="col" className="px-6 py-3">
                Facility Booking Member Name
              </th>
              <th scope="col" className="px-6 py-3">
                Facility Booking Member Contact Number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">
                Facility Name as Provided by Society
              </td>
              <td className="px-6 py-4">Unique no can be sent for Invoicing</td>
              <td className="px-6 py-4">
                Start date as provided during booking request
              </td>
              <td className="px-6 py-4">
                End date as provided during booking request
              </td>
              <td className="px-6 py-4">
                Management/ Resident User (Flat/ Unit Number)
              </td>
              <td className="px-6 py-4">
                Management – Management Committee Else Unit No (User Name)
              </td>
              <td className="px-6 py-4">
                User Contact / Mobile No as maintained in profile information
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-row gap-3">
                  <FaEdit className="text-[30px] text-green-500" />
                  <MdDelete className="text-[30px] text-red-500" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
