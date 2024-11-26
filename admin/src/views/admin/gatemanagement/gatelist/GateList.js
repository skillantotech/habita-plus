import React from "react";
import { FaSearch } from "react-icons/fa";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";

const GateList = () => {
  const paths = ["users", "Gate List"];
  const Heading = ["Gate List"];
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

          <div className="flex flex-col mt-[35px] space-y-3">
            <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs bg-lime text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Gate No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Mobile
                    </th>
                    <th scope="col" className="px-6 py-3">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">Gate 1</td>
                    <td className="px-6 py-4">Rabi</td>
                    <td className="px-6 py-4">Hota</td>
                    <td className="px-6 py-4">8798766756</td>

                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">Gate 1</td>
                    <td className="px-6 py-4">biswajit</td>
                    <td className="px-6 py-4">dash</td>
                    <td className="px-6 py-4">8798766756</td>

                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateList;
