import SectionHeading from "@/components/shared/SectionHeading";
import { TabContent, Tabs } from "@/components/shared/Tabs";
import React, { useState } from "react";

const TableTabs = () => {
  const tabData = [
    { name: "Neighbours", label: "Neighbours" },
    { name: "Management", label: "Management", extra: "Committee" },
    { name: "Emergency", label: "Emergency", extra: "Contact" },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Tabs className="text-gray-700 overflow-x-scroll no-scrollbar z-0">
      {tabData.map((tab) => (
        <TabContent
          key={tab.name}
          className="flex gap-1"
          onClick={() => handleTabClick(tab.name)}
          active={activeTab === tab.name}
        >
          {tab.label}
          {tab.extra && <span className="hidden lg:block">{tab.extra}</span>}
        </TabContent>
      ))}
    </Tabs>
  );
};

const Tablecontent = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-white uppercase bg-turquoise">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 w-[180px] border-r border-r-white border-l-0 border-t-0 border-b-0"
              >
                Unit No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white even:bg-blue-100">
              <td class="px-6 py-4 w-[180px] border-r border-r-white border-l-0 border-t-0 border-b-0">
                001
              </td>
              <td class="px-6 py-4">Andrew</td>
            </tr>
            <tr class="odd:bg-white even:bg-blue-100">
              <td class="px-6 py-4 w-[180px] border-r border-r-white border-l-0 border-t-0 border-b-0">
                002
              </td>
              <td class="px-6 py-4 ">Alfred</td>
            </tr>
            <tr class="odd:bg-white even:bg-blue-100">
              <td class="px-6 py-4 w-[180px] border-r border-r-white border-l-0 border-t-0 border-b-0">
                003
              </td>
              <td class="px-6 py-4 ">Robert </td>
            </tr>
            <tr class="odd:bg-white even:bg-blue-100">
              <td class="px-6 py-4 w-[180px] border-r border-r-white border-l-0 border-t-0 border-b-0">
                004
              </td>
              <td class="px-6 py-4 ">Houston</td>
            </tr>
            <tr class="odd:bg-white even:bg-blue-100">
              <td class="px-6 py-4 w-[180px] border-r border-r-white border-l-0 border-t-0 border-b-0">
                005
              </td>
              <td class="px-6 py-4 ">Tom </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CommunityDirectories = () => {
  return (
    <div className="space-y-5">
      <SectionHeading>Community Directories</SectionHeading>
      <div className="space-y-5">
        <TableTabs />
        <Tablecontent />
      </div>
    </div>
  );
};

export default CommunityDirectories;
