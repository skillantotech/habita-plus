import React from "react";
import { FaSearch } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
const DeactivateUser = () => {
  const paths = ["User Management", "Deactivate users"];
  const Heading = ["Deactivate Users"];
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
            TOTAL 120 UNITS AND 190 USERS
          </div>
          <div className="flex flex-row mt-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by Units/Users..."
                className="px-4 py-4 border w-full border-gray-300 rounded-md focus:outline-none"
              />
              <FaSearch className="absolute right-7 top-5 text-lg text-gray-500" />
            </div>
          </div>
          <div className="flex flex-col mt-[35px] space-y-3">
            <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-base bg-lime text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Mobile No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th> */}

                    <th scope="col" className="px-6 py-3">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">Joseph</td>
                    <td className="px-6 py-4">Stalin</td>
                    <td className="px-6 py-4">Tenant</td>
                    <td className="px-6 py-4">8798766756</td>
                    <td className="px-6 py-4">joseph@gmail.com</td>
                    {/* <td className="px-6 py-4">Approved</td>
                  <td className="px-6 py-4">Belong to this appartment</td> */}
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-lime hover:bg-green-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-tl-xl rounded-br-xl text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-500 hover:bg-green-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-tr-xl rounded-bl-xl text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        Activate
                      </button>
                    </td>

                    
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">Tom</td>
                    <td className="px-6 py-4">Steve</td>
                    <td className="px-6 py-4">Tenant</td>
                    <td className="px-6 py-4">8798766756</td>
                    <td className="px-6 py-4">tom@gmail.com</td>
                    {/* <td className="px-6 py-4">Approved</td>
                  <td className="px-6 py-4">Belong to this appartment</td> */}
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-lime hover:bg-green-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-tl-xl rounded-br-xl text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-500 hover:bg-green-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-tr-xl rounded-bl-xl text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        Activate
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="w-1/2 ">
        <div className="px-[45px] text-xl font-semibold">
          UNIT : <span>A-013</span>
        </div>
        <div className="border my-[30px] mx-[45px] border-gray-800"></div>
        <div className="flex flex-col space-y-2 px-[45px] ">
          <div className="font-sans text-[15px] text-gray-600">
            {" "}
            Bill to name : Praveen
          </div>
          <div className="font-sans text-[15px] text-gray-600">
            Unit no :A-013{" "}
          </div>
          <div className="font-sans text-[15px] text-gray-600">
            Physical Unit Address:{" "}
          </div>

          <div className="font-sans text-[15px] text-gray-600">
            Billing Address{" "}
          </div>
        </div>
        <div className="text-lime px-[45px] pt-[40px] font-sans">
          View/Edit Unit and Address details
        </div>
        <div className="flex flex-row items-center py-[30px] px-[45px]">
          <IoPersonOutline className="text-xl mr-[30px]" />{" "}
          <div className="text-lg font-sans font-base">Unit Members(2)</div>
        </div>
        <div className="border  mx-[45px] border-gray-800"></div>
        <div className="flex flex-row items-center py-[30px] px-[45px]">
          <FaCar className="text-xl mr-[30px]" />{" "}
          <div className="text-lg font-sans font-base">Vehicle(1)</div>
        </div>
        <div className="border  mx-[45px] border-gray-800"></div>
      </div>{" "} */}
      </div>
    </div>
  );
};

export default DeactivateUser;
