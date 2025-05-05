

// import { useState, useRef } from "react";
// import UrlPath from "../../../../components/shared/UrlPath";
// import PageHeading from "../../../../components/shared/PageHeading";
// import Button from "../../../../components/ui/Button";

// const DocumentUploadFacility = ({ onFileUpload }) => {
//   const paths = ["user", "Document Upload Facility"];
//   const Heading = ["Document Upload Facility"];

//   const [fileName, setFileName] = useState("");
//   const [file, setFile] = useState(null);
//   const [visibility, setVisibility] = useState("");
//   const fileInputRef = useRef(null);

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//     // Do not auto-set fileName
//   };

//   const handleUpload = () => {
//     if (!file || !visibility || !fileName) {
//       alert("Please provide a file, filename, and select visibility.");
//       return;
//     }

//     const newFile = {
//       id: Date.now(),
//       fileName,
//       fileType: file.type,
//       visibility,
//     };

//     onFileUpload(newFile); // Send to parent
//     setFile(null);
//     setFileName("");
//     setVisibility("");
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   return (
//     <div className="px-5">
//       <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
//         <UrlPath paths={paths} />
//       </div>

//       <PageHeading heading={Heading} />

//       <div className="p-10 my-5 border rounded-lg bg-gray-100">
//         <div className="flex gap-2 items-center">
//           <label className="block font-semibold">File Name:</label>
//           <input
//             type="text"
//             className="border p-2 flex-grow"
//             value={fileName}
//             onChange={(e) => setFileName(e.target.value)}
//             placeholder="Enter file name"
//           />
//           <input
//             type="file"
//             className="border p-2"
//             onChange={handleFileChange}
//             ref={fileInputRef}
//           />
//         </div>

//         <div className="grid grid-cols-5 gap-2 items-center my-5">
//           {[
//             "Only for Owners",
//             "Self",
//             "Only for Tenants",
//             "All members",
//             "All Primary Contacts",
//           ].map((option, idx) => (
//             <div key={idx} className="flex flex-row items-center gap-3">
//               <input
//                 type="radio"
//                 name="visibility"
//                 value={option}
//                 checked={visibility === option}
//                 onChange={() => setVisibility(option)}
//               />
//               <label>{option}</label>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-5">
//           <Button
//             className="max-w-sm"
//             type="submit"
//             size="lg"
//             onClick={handleUpload}
//           >
//             Submit
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentUploadFacility;


import React from "react";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import DocumentUploadFacilityForm from "./DocumentUploadFaciltyForm";

const DocumentUploadFacility = () => {
  const paths = ["Document Management", "Document Upload Facility"];
  const Heading = ["Document Upload Facility"];
  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      {/* <div className="text-2xl font-semibold text-lime mt-4">Add Unit</div> */}
      <PageHeading heading={Heading} />
      <DocumentUploadFacilityForm/>
    </div>
  );
};

export default DocumentUploadFacility;