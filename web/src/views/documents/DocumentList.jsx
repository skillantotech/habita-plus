
// import React from "react";
// import Button from "@/components/ui/Button";

// const DocumentList = ({ files }) => { // Fixed prop name
//   const handleView = (file) => {
//     if (file) {
//       const url = URL.createObjectURL(file);
//       window.open(url, "_blank");
//     } else {
//       alert("File not found!");
//     }
//   };

//   const handleDownload = (file, name) => {
//     if (file) {
//       const url = URL.createObjectURL(file);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = name;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       alert("File not found!");
//     }
//   };

//   return (
//     <div className="mt-4 border p-4 rounded-lg bg-gray-50">
//       <h3 className="text-md font-semibold mb-2">My Files List</h3>
//       {files.length > 0 ? (
//         files.map((fileItem, index) => (
//           <div key={index} className="flex items-center justify-between bg-white p-2 rounded shadow mb-2">
//             <span className="text-gray-700">{fileItem.name}</span>
//             <div className="flex gap-2">
//               <Button className="bg-gray-500 text-white px-2 py-1" onClick={() => handleView(fileItem.file)}>
//                 👁 View
//               </Button>
//               <Button className="bg-green-500 text-white px-2 py-1" onClick={() => handleDownload(fileItem.file, fileItem.name)}>
//                 ⬇ Download
//               </Button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-gray-500">No files uploaded yet.</p>
//       )}
//     </div>
//   );
// };

// export default DocumentList;



// "use client"; // Ensure this runs on the client side

// import React from "react";
// import { useRouter } from "next/navigation";
// import { Eye, Download } from "lucide-react";

// const documents = [
//   { id: 1, name: "Document 1.pdf", url: "/docs/document1.pdf" },
//   { id: 2, name: "Document 2.docx", url: "/docs/document2.docx" },
//   { id: 3, name: "Document 3.xlsx", url: "/docs/document3.xlsx" },
// ];

// const DocumentList = () => {
//   const router = useRouter();

//   const handleView = (url) => {
//     router.push(url); // Navigate to the document URL within Next.js
//   };



//   return (
//     <div className="p-6 mt-5 border rounded-lg bg-gray-100">
//       <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Document Name</th>
//             <th className="border p-2 text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {documents.map((doc) => (
//             <tr key={doc.id} className="border">
//               <td className="border p-2">{doc.name}</td>
//               <td className="border p-2 flex justify-center gap-4">
//                 {/* View Button */}
//                 <button
//                   onClick={() => handleView(doc.url)}
//                   className="text-yellow-600 hover:text-yellow-700"
//                 >
//                   <Eye className="text-lg" />
//                 </button>

//                 {/* Download Button */}
//                 <button
//                   onClick={() => handleDownload(doc.url)}
//                   className="text-green-600 hover:text-green-700"
//                 >
//                   <Download className="text-lg" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DocumentList;


// "use client"; // Ensure this runs on the client side

// import React, { useState } from "react";
// import { Eye, Download, X } from "lucide-react";

// const documents = [
//   { id: 1, name: "Document 1.pdf", url: "/docs/document1.pdf" },
//   { id: 2, name: "Document 2.docx", url: "/docs/document2.docx" },
//   { id: 3, name: "Document 3.xlsx", url: "/docs/document3.xlsx" },
//   { id: 4, name: "abc.png", url: "/docs/abc.png" },
// ];

// const DocumentList = () => {
//   const [selectedDoc, setSelectedDoc] = useState(null);

//   // Function to show dummy data instead of navigating
//   const handleView = (doc) => {
//     setSelectedDoc(doc); // Set the document data to display in modal
//   };

//   // Function to close the dummy data modal
//   const closeModal = () => {
//     setSelectedDoc(null);
//   };

//   // Function to handle downloads
//   const handleDownload = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", ""); // Forces download
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-6 mt-5 border rounded-lg bg-gray-100">
//       <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Document Name</th>
//             <th className="border p-2 text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {documents.map((doc) => (
//             <tr key={doc.id} className="border">
//               <td className="border p-2">{doc.name}</td>
//               <td className="border p-2 flex justify-center gap-4">
//                 {/* View Button */}
//                 <button
//                   onClick={() => handleView(doc)}
//                   className="text-yellow-600 hover:text-yellow-700"
//                 >
//                   <Eye className="text-lg" />
//                 </button>

//                 {/* Download Button */}
//                 <button
//                   onClick={() => handleDownload(doc.url)}
//                   className="text-green-600 hover:text-green-700"
//                 >
//                   <Download className="text-lg" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Dummy Data Modal */}
//       {selectedDoc && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
//               <X className="text-lg" />
//             </button>
//             <h3 className="text-lg font-semibold mb-2">{selectedDoc.name}</h3>
//             <p className="text-sm text-gray-600">
//               This is some dummy content for <strong>{selectedDoc.name}</strong>. 
//               You can replace this with actual document preview data.
//             </p>
//             <div className="mt-4 text-right">
//               <button onClick={closeModal} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentList;

// "use client"; // Ensure this runs on the client side

// import React, { useState } from "react";
// import { Eye, Download, X } from "lucide-react";

// const documents = [
//   { id: 1, name: "Document 1.pdf", url: "/docs/document1.pdf" },
//   { id: 2, name: "Document 2.docx", url: "/docs/document2.docx" },
//   { id: 3, name: "Document 3.xlsx", url: "/docs/document3.xlsx" },
//   { id: 4, name: "abc.png", url: "/docs/abc.png" },
// ];

// const getFileType = (filename) => {
//   const extension = filename.split(".").pop();
//   const types = {
//     pdf: "PDF Document",
//     docx: "Word Document",
//     xlsx: "Excel Spreadsheet",
//     png: "Image",
//     jpg: "Image",
//     jpeg: "Image",
//   };
//   return types[extension] || "Unknown";
// };

// const DocumentList = () => {
//   const [selectedDoc, setSelectedDoc] = useState(null);

//   const handleView = (doc) => {
//     setSelectedDoc(doc);
//   };

//   const closeModal = () => {
//     setSelectedDoc(null);
//   };

//   const handleDownload = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-6 mt-5 border rounded-lg bg-gray-100">
//       <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200 ">
//             <th className="border p-2 ">Document ID</th>
//             <th className="border p-2 t">Document Type</th>
//             <th className="border p-2">Document Name</th>
//             <th className="border p-2 text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {documents.map((doc, index) => (
//             <tr key={doc.id} className="border">
//               <td className="border p-2 text-center">{index + 1}</td>
//               <td className="border p-2 text-center">{getFileType(doc.name)}</td>
//               <td className="border p-2 text-center">{doc.name}</td>
//               <td className="border p-2 flex justify-center gap-4">
//                 <button
//                   onClick={() => handleView(doc)}
//                   className="text-yellow-600 hover:text-yellow-700"
//                 >
//                   <Eye className="text-lg" />
//                 </button>
//                 <button
//                   onClick={() => handleDownload(doc.url)}
//                   className="text-green-600 hover:text-green-700"
//                 >
//                   <Download className="text-lg" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedDoc && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
//               <X className="text-lg" />
//             </button>
//             <h3 className="text-lg font-semibold mb-2">{selectedDoc.name}</h3>
//             <p className="text-sm text-gray-600">
//               This is some dummy content for <strong>{selectedDoc.name}</strong>. 
//               You can replace this with actual document preview data.
//             </p>
//             <div className="mt-4 text-right">
//               <button onClick={closeModal} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentList;

"use client";
import { FiEye, FiDownload } from "react-icons/fi"; // Importing icons

const DocumentList = ({ files }) => {
  // Placeholder functions for View & Download actions
  const handleViewFile = (file) => {
    alert(`Viewing file: ${file.fileName}`);
    // Open file URL in a new tab if available
    // window.open(file.url, "_blank");
  };

  const handleDownloadFile = (file) => {
    alert(`Downloading file: ${file.fileName}`);
    // Add actual download logic if file URL is available
    // const link = document.createElement("a");
    // link.href = file.url;
    // link.download = file.fileName;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <div className="p-4 bg-gray-100 mt-4 rounded shadow-md">
      <h2 className="text-lg font-semibold">View Details</h2>
      <table className="w-full mt-2 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">SL No</th>
            <th className="border p-2">File Type</th>
            <th className="border p-2">File Name</th>
            <th className="border p-2">Actions</th>
            <th className="border p-2">Visibility</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={file.id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{file.fileType}</td>
              <td className="border p-2">{file.fileName}</td>
              <td className="border p-2">
                <div className="flex justify-center gap-2">
                  {/* View Button */}
                  <button
                    className=""
                    onClick={() => handleViewFile(file)}
                    aria-label="View File"
                  >
                    <FiEye />
                  </button>

                  {/* Download Button */}
                  <button
                    className=""
                    onClick={() => handleDownloadFile(file)}
                    aria-label="Download File"
                  >
                    <FiDownload />
                  </button>
                </div>
              </td>
              <td className="border p-2">{file.visibility}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentList;
