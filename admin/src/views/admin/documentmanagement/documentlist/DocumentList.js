import { FiEye, FiDownload } from "react-icons/fi";

const DocumentList = ({ files }) => {
  const dummyFiles = [
    {
      id: 1,
      fileType: "PDF",
      fileName: "Report_2024.pdf",
      url: "https://example.com/Report_2024.pdf",
      visibility: "Only Members",
    },
    {
      id: 2,
      fileType: "Word",
      fileName: "Project_Document.docx",
      url: "https://example.com/Project_Document.docx",
      visibility: "Self",
    },
    {
      id: 3,
      fileType: "Word",
      fileName: "Tenant_Info.docx",
      url: "https://example.com/Tenant_Info.docx",
      visibility: "Only Tenants",
    },
    {
      id: 4,
      fileType: "Excel",
      fileName: "Financials.xlsx",
      url: "https://example.com/Financials.xlsx",
      visibility: "All members",
    },
    {
      id: 5,
      fileType: "Image",
      fileName: "Design.png",
      url: "https://example.com/Design.png",
      visibility: "All Primary Contacts",
    },
  ];

  const dataToRender = files && files.length > 0 ? files : dummyFiles;

  const handleViewFile = (file) => {
    alert(`Viewing file: ${file.fileName}`);
    // window.open(file.url, "_blank");
  };

  const handleDownloadFile = (file) => {
    alert(`Downloading file: ${file.fileName}`);
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
          {dataToRender.map((file, index) => (
            <tr key={file.id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{file.fileType}</td>
              <td className="border p-2">{file.fileName}</td>
              <td className="border p-2">
                <div className="flex justify-center gap-2">
                  <button onClick={() => handleViewFile(file)} aria-label="View File">
                    <FiEye />
                  </button>
                  <button onClick={() => handleDownloadFile(file)} aria-label="Download File">
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
