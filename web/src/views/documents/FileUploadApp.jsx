// import { useState } from "react";
// import Button from "@/components/ui/Button";

// const FileUploadApp = ({ onFileUpload }) => {
//   const [fileName, setFileName] = useState("");
//   const [file, setFile] = useState(null);
//   const [visibility, setVisibility] = useState("");

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//     setFileName(uploadedFile ? uploadedFile.name : "");
//   };

//   const handleUpload = () => {
//     if (!file || !visibility) {
//       alert("Please select a file and visibility option.");
//       return;
//     }

//     // Simulate file upload
//     const newFile = {
//       id: Date.now(),
//       fileName,
//       fileType: file.type,
//       visibility,
//     };

//     onFileUpload(newFile);
//     setFile(null);
//     setFileName("");
//     setVisibility("");
//   };

//   return (
//     <div className="p-4 rounded  bg-gray-200 mt-4">
//  <div>

//  <label className="block font-semibold">File Name:</label>
//       <input
//         type="text"
//         className="border p-2 w-full mt-1"
//         value={fileName}
//         readOnly
//       />

//       <input
//         type="file"
//         className="mt-2 border p-2 w-full"
//         onChange={handleFileChange}
//       />

//       {/* <label className="block font-semibold mt-2">Select Visibility:</label>
//       <select
//         className="border p-2 w-full mt-1"
//         value={visibility}
//         onChange={(e) => setVisibility(e.target.value)}
//       >
//         <option value="">-- Select --</option>
//         <option value="Owners">Only Owners</option>
//         <option value="Tenants">Only Tenants</option>
//         <option value="Members">All Members</option>
//         <option value="Primary Contacts">All Primary Contacts</option>
//       </select> */}

//       <div className="grid grid-cols-4 gap-5 items-center my-5">
//             {" "}
//             <div className="flex flex-row items-center gap-3">
//               <label> Only for Owners</label>
//               <input type="radio" name="drone" checked className="text-lg" />
//             </div>
//             <div className=" flex flex-row items-center gap-3">
//               <label>Only for Tenants</label>
//               <input type="radio" name="drone" checked />
//             </div>
//             <div className=" flex flex-row items-center gap-3">
//               <label>All members</label>
//               <input type="radio" name="drone" checked />
//             </div>
//             <div className=" flex flex-row items-center gap-3">
//               <label>All Primary Contacts</label>
//               <input type="radio" name="drone" checked />
//             </div>
//           </div>

//       {/* <button
//         className="bg-green-500 text-white p-2 mt-3 w-full rounded"
//         onClick={handleUpload}
//       >
//         Submit
//       </button> */}
//       <Button
//         type="submit"
//         className="w-32 px-4 py-2 mt-3 text-white bg-green-500 hover:bg-green-600"
//       >
//         Submit
//       </Button>
//  </div>
//     </div>
//   );
// };

// export default FileUploadApp;

// import { useState } from "react";
// import  Button  from "@/components/ui/button";

// const FileUploadApp = ({ onFileUpload }) => {
//   const [fileName, setFileName] = useState("");
//   const [file, setFile] = useState(null);
//   const [visibility, setVisibility] = useState("");

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//     setFileName(uploadedFile ? uploadedFile.name : "");
//   };

//   const handleUpload = () => {
//     if (!file || !visibility) {
//       alert("Please select a file and visibility option.");
//       return;
//     }

//     // Simulate file upload
//     const newFile = {
//       id: Date.now(),
//       fileName,
//       fileType: file.type,
//       visibility,
//     };

//     onFileUpload(newFile);
//     setFile(null);
//     setFileName("");
//     setVisibility("");
//   };

//   return (
//     <div className="bg-white p-6 rounded-md shadow-md">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Document Upload Facility</h2>

//       <div className="bg-gray-100 p-4 rounded-md mb-4">
//         <label className="block font-medium text-gray-700 mb-2">
//           {/* Upload Documents (Image, Doc, PDF, Excel, ZIP - Max size 5MB) */}
//           Upload Documents

//         </label>
//         <input
//           type="file"
//           className="w-full border border-gray-300 p-2 rounded-md"
//           onChange={handleFileChange}
//         />
//       </div>

//       {/* <div className="bg-gray-100 p-4 rounded-md mb-4">
//         <label className="block font-medium text-gray-700 mb-2">
//           Upload Video (Max size allowed 1GB)
//         </label>
//         <input
//           type="file"
//           className="w-full border border-gray-300 p-2 rounded-md"
//           onChange={handleFileChange}
//         />
//       </div> */}

//       <div className="bg-gray-100 p-4 rounded-md mb-4">
//         <label className="block font-medium text-gray-700 mb-2">Visibility:</label>
//         <div className="flex gap-4">
//           {[
//             "Owners",
//             "Tenants",
//             "All members",
//             "All Primary Contacts",
//           ].map((option) => (
//             <label key={option} className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="visibility"
//                 value={option}
//                 checked={visibility === option}
//                 onChange={(e) => setVisibility(e.target.value)}
//                 className="form-radio text-blue-500"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       </div>

//       <Button
//         onClick={handleUpload}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md w-full"
//       >
//         Submit
//       </Button>
//     </div>
//   );
// };

// export default FileUploadApp;

// import { useState } from "react";
// import Button from "@/components/ui/Button";

// const FileUploadApp = ({ onFileUpload }) => {
//   const [fileName, setFileName] = useState("");
//   const [file, setFile] = useState(null);
//   const [visibility, setVisibility] = useState("");

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//     setFileName(uploadedFile ? uploadedFile.name : "");
//   };

//   const handleUpload = () => {
//     if (!file || !visibility) {
//       alert("Please select a file and visibility option.");
//       return;
//     }

//     // Simulate file upload
//     const newFile = {
//       id: Date.now(),
//       fileName,
//       fileType: file.type,
//       visibility,
//     };

//     onFileUpload(newFile);
//     setFile(null);
//     setFileName("");
//     setVisibility("");
//   };

//   return (
//     <div className="p-4 rounded bg-gray-200 mt-4">
//       <div>
//         <div className="flex gap-2 items-center">
//           <label className="block font-semibold">File Name:</label>
//           <input
//             type="text"
//             className="border p-2 flex-grow"
//             value={fileName}
//             readOnly
//           />
//           <input
//             type="file"
//             className="border p-2"
//             onChange={handleFileChange}
//           />
//           <Button
//             type="submit"
//             className=" text-white bg-green-500 hover:bg-green-600"
//             onClick={handleUpload}
//           >
//             Submit
//           </Button>
//         </div>

//         <div className="grid grid-cols-4 gap-5 items-center my-5">

//           <div className="flex flex-row items-center gap-3">
//             <label>Only for Owners</label>
//             <input type="radio" name="drone" className="text-lg" />
//           </div>
//           <div className="flex flex-row items-center gap-3">
//             <label>Self</label>
//             <input type="radio" name="drone" className="text-lg" />
//           </div>
//           <div className="flex flex-row items-center gap-3">
//             <label>Only for Tenants</label>
//             <input type="radio" name="drone" />
//           </div>
//           <div className="flex flex-row items-center gap-3">
//             <label>All members</label>
//             <input type="radio" name="drone" />
//           </div>
//           <div className="flex flex-row items-center gap-3">
//             <label>All Primary Contacts</label>
//             <input type="radio" name="drone" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FileUploadApp;


// import { useState } from "react";
// import Button from "@/components/ui/Button";

// const FileUploadApp = ({ onFileUpload }) => {
//   const [fileName, setFileName] = useState("");
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//     setFileName(uploadedFile ? uploadedFile.name : "");
//   };

//   const handleUpload = () => {
//     if (!file) {
//       alert("Please select a file.");
//       return;
//     }

//     // Simulate file upload
//     const newFile = {
//       id: Date.now(),
//       fileName,
//       fileType: file.type,
//     };

//     onFileUpload(newFile);
//     setFile(null);
//     setFileName("");
//   };

//   return (
//     <div className="p-4 rounded bg-gray-200 mt-4">
//       <div>
//         <div className="flex flex-col gap-2">
//           <div className="flex gap-2 items-center">
//             <label className="block font-semibold">File Name:</label>
//             <input
//               type="text"
//               className="border p-2 flex-grow"
//               value={fileName}
//               readOnly
//             />
//             <input
//               type="file"
//               className="border p-2"
//               onChange={handleFileChange}
//             />
//             <Button
//               type="submit"
//               className="text-white bg-green-500 hover:bg-green-600"
//               onClick={handleUpload}
//             >
//               Submit
//             </Button>
//           </div>
//           <span className="text-sm text-gray-600 ml-[118px]">
//             (JPEG, ZIP, PDF up to 2MB) (.MP4, .3GP up to 1GB)
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FileUploadApp;



// import { useState } from "react";
// import Button from "@/components/ui/Button";

// const FileUploadApp = ({ onFileUpload }) => {
//   const [fileName, setFileName] = useState("");
//   const [file, setFile] = useState(null);
//   const [visibility, setVisibility] = useState("");

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//     // Don't auto-fill the fileName anymore
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

//     onFileUpload(newFile);
//     setFile(null);
//     setFileName("");
//     setVisibility("");
//   };

//   return (
//     <div className="p-10 my-5 border rounded-lg bg-gray-100">
//       <div>
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
//               <label>{option}</label>
//               <input
//                 type="radio"
//                 name="visibility"
//                 value={option}
//                 checked={visibility === option}
//                 onChange={() => setVisibility(option)}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-5">
//             <Button className="max-w-sm" type="submit" size="lg">
//               Submit
//             </Button>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default FileUploadApp;

"use client";

import { useState, useRef } from "react";
import Button from "@/components/ui/Button";

const FileUploadApp = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [visibility, setVisibility] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    // We do NOT set fileName here – user will manually input it
  };

  const handleUpload = () => {
    if (!file || !visibility || !fileName) {
      alert("Please provide a file, filename, and select visibility.");
      return;
    }

    const newFile = {
      id: Date.now(),
      fileName,
      fileType: file.type,
      visibility,
    };

    onFileUpload(newFile);

    // Reset fields
    setFile(null);
    setFileName("");
    setVisibility("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-10 my-5 border rounded-lg bg-gray-100">
      <div>
        <div className="flex gap-2 items-center">
          <label className="block font-semibold">File Name:</label>
          <input
            type="text"
            className="border p-2 flex-grow"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Enter file name"
          />
          <input
            type="file"
            className="border p-2"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>

        <div className="grid grid-cols-5 gap-2 items-center my-5">
          {[
            "Only for Owners",
            "Self",
            "Only for Tenants",
            "All members",
            "All Primary Contacts",
          ].map((option, idx) => (
            <div key={idx} className="flex flex-row items-center gap-3">
              <label>{option}</label>
              <input
                type="radio"
                name="visibility"
                value={option}
                checked={visibility === option}
                onChange={() => setVisibility(option)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-5">
          <Button className="max-w-sm" type="button" size="lg" onClick={handleUpload}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadApp;
