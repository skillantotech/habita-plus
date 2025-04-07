
// import { useState, useRef } from "react";

// import Button from "../../../../components/ui/Button";

// const DocumentUploadFacilityForm = ({ onFileUpload }) => {
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

// export default DocumentUploadFacilityForm;
import { useState, useRef, useEffect } from "react";
import Button from "../../../../components/ui/Button";
import DocumentHandler from "../../../../handlers/DocumentHandler";

const DocumentUploadFacilityForm = () => {
  const { createDocumentHandler, getDocumentHandler } = DocumentHandler();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    fileName: "",
    visibility: "",
    userGroupId: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [documents, setDocuments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, userGroupId: value }));
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setForm((prev) => ({ ...prev, file: uploadedFile }));
  };

  const validateFields = () => {
    let tempErrors = {};
    if (!form.fileName.trim()) tempErrors.fileName = "File name is required.";
    if (!form.file) tempErrors.file = "File is required.";
    if (!form.userGroupId) tempErrors.userGroupId = "Please select a user group.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleUpload = async () => {
    if (!validateFields()) return;

    const formData = new FormData();
    formData.append("documentName", form.fileName);
    formData.append("userGroupId", form.userGroupId);
    formData.append("document", form.file);

    try {
      await createDocumentHandler(formData);
      alert("Document uploaded successfully!");

      setForm({
        fileName: "",
        visibility: "",
        userGroupId: "",
        file: null,
      });
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = "";

      fetchDocuments();
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    }
  };

  const fetchDocuments = async () => {
    try {
      const data = await getDocumentHandler();
      setDocuments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
      setDocuments([]);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div className="px-5">
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="flex gap-2 items-center">
          <label className="block font-semibold">File Name:</label>
          <input
            type="text"
            name="fileName"
            className={`border p-2 flex-grow ${
              errors.fileName ? "border-red-500" : ""
            }`}
            value={form.fileName}
            onChange={handleChange}
            placeholder="Enter file name"
          />
          <input
            type="file"
            name="file"
            className={`border p-2 ${errors.file ? "border-red-500" : ""}`}
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>
        {errors.fileName && <p className="text-red-500 text-sm">{errors.fileName}</p>}
        {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}

        <div className="grid grid-cols-4 gap-5 items-center my-5">
          {[
            { label: "Only for Owners", value: "1" },
            { label: "Only for Tenants", value: "2" },
            { label: "All Members", value: "3" },
            { label: "All Primary Contacts", value: "4" },
          ].map(({ label, value }) => (
            <div key={value} className="flex flex-row items-center gap-3">
              <label>{label}</label>
              <input
                type="radio"
                name="userGroupId"
                value={value}
                checked={form.userGroupId === value}
                onChange={handleRadioChange}
              />
            </div>
          ))}
        </div>
        {errors.userGroupId && (
          <p className="text-red-500 text-sm">{errors.userGroupId}</p>
        )}

        <div className="flex justify-center mt-5">
          <Button className="max-w-sm" type="button" size="lg" onClick={handleUpload}>
            Submit
          </Button>
        </div>
      </div>

      {/* Uploaded documents section */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-4">Uploaded Documents</h2>
        {documents.length === 0 ? (
          <p>No documents found.</p>
        ) : (
          <ul className="space-y-2">
            {documents.map((doc) => (
              <li
                key={doc.id}
                className="p-3 border rounded bg-white shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{doc.documentName}</p>
                  <p className="text-sm text-gray-500">Group: {doc.userGroupId}</p>
                </div>
                <span className="text-xs text-gray-400">
                  {doc.document?.split("/").pop()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DocumentUploadFacilityForm;
