// import React from "react";
// import DashboardLayout from "@/components/layouts/DashboardLayout";
// import DashboardHeader from "@/views/dashboard/DashboardHeader";
// import DashboardLeftContents from "@/views/dashboard/DashboardLeftContents";

// const Documents = () => {
//   return (
//     <main>
//       <DashboardLayout
//         header={<DashboardHeader />}
//         leftContent={<DashboardLeftContents />}
//         rightContent={<React.Fragment>
//         <FileUploadApp/>
//      Document
//         </React.Fragment>}
//       />
//     </main>
//   );
// };

// export default Documents;

import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardHeader from "@/views/dashboard/DashboardHeader";
import DashboardLeftContents from "@/views/dashboard/DashboardLeftContents";
import FileUploadApp from "./FileUploadApp";
import DocumentList from "./DocumentList";
// import ResidentDashboard from "./ResidentDashboard";
// import AddDocument from "../dashboard/components/document/AddDocument";
// import DocumentsList from "../dashboard/components/document/DocumentsList";

const Documents = () => {
  const [files, setFiles] = useState([]);


  const dummyFiles = [
    {
      id: 1,
      fileType: "PDF",
      fileName: "Report_2024.pdf",
      url: "https://example.com/Report_2024.pdf",
      visibility: "Only Memeber",
    },
    {
      id: 2,
      fileType: "Word",
      fileName: "Project_Document.docx",
      url: "https://example.com/Project_Document.docx",
      visibility: "Self",
    },
    {
      id: 2,
      fileType: "Word",
      fileName: "Project_Document.docx",
      url: "https://example.com/Project_Document.docx",
      visibility: "Only Tentant",
    },
    {
      id: 3,
      fileType: "Excel",
      fileName: "Financials.xlsx",
      url: "https://example.com/Financials.xlsx",
      visibility: "All members",
    },
    {
      id: 4,
      fileType: "Image",
      fileName: "Design.png",
      url: "https://example.com/Design.png",
      visibility: "All Primary Contacts",
    },
  ];

  const handleFileUpload = (newFile) => {
    setFiles([...files, newFile]);
  };
  return (
    <main>
      <DashboardLayout
        header={<DashboardHeader />}
        leftContent={<DashboardLeftContents />}
        rightContent={
          <React.Fragment>
            <FileUploadApp onFileUpload={handleFileUpload} />
            <DocumentList files={dummyFiles} />
          </React.Fragment>
        }
      />
    </main>
  );
};

export default Documents;
