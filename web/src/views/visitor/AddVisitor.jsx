// import React, { useState, useEffect,useSelector  } from "react";
// import { FaPlus } from "react-icons/fa6";
// import Button from "@/components/ui/Button";
// import VisitHandler from "@/handlers/VisitHandler";

// const AddVisitor = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { createNewVisitorEntry } = VisitHandler();
//   const [errors, setErrors] = useState({});
 
//   // Visitor form state
//   const [visitorDetails, setVisitorDetails] = useState({
//     visit_name: "",
//     visit_mobileno: "",
//     visit_location: "",
//     visit_expect_date_of_entry_date: new Date().toISOString().split("T")[0],
//     visit_valid_till_date: new Date().toISOString().split("T")[0],
//     visit_porpous: "",
//   });

//   // Open modal and set default entry date
//   useEffect(() => {
//     if (isModalOpen) {
//       setVisitorDetails((prev) => ({
//         ...prev,
//         visit_expect_date_of_entry_date: new Date().toISOString().split("T")[0],
//       }));
//     }
//   }, [isModalOpen]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVisitorDetails((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   // Validate form fields
//   const validateForm = () => {
//     let formErrors = {};
//     const today = new Date().toISOString().split("T")[0];

//     if (!visitorDetails.visit_name) formErrors.visit_name = "Name is required.";
//     if (!visitorDetails.visit_mobileno) formErrors.visit_mobileno = "Mobile number is required.";
//     if (!visitorDetails.visit_location) formErrors.visit_location = "Address is required.";
//     if (!visitorDetails.visit_expect_date_of_entry_date) {
//       formErrors.visit_expect_date_of_entry_date = "Entry date is required.";
//     } else if (visitorDetails.visit_expect_date_of_entry_date < today) {
//       formErrors.visit_expect_date_of_entry_date = "Entry date cannot be in the past.";
//     }
//     if (!visitorDetails.visit_porpous) formErrors.visit_porpous = "Purpose is required.";

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       await createNewVisitorEntry(visitorDetails);
//       setVisitorDetails({
//         visit_name: "",
//         visit_mobileno: "",
//         visit_location: "",
//         visit_expect_date_of_entry_date: new Date().toISOString().split("T")[0],
//         visit_valid_till_date: new Date().toISOString().split("T")[0],
//         visit_porpous: "",
//       });
//       setErrors({});
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error("Error submitting visitor entry:", error.message);
//     }
//   };

//   // Close modal and reset form
//   const closeModal = () => {
//     setVisitorDetails({
//       visit_name: "",
//       visit_mobileno: "",
//       visit_location: "",
//       visit_expect_date_of_entry_date: new Date().toISOString().split("T")[0],
//       visit_valid_till_date: new Date().toISOString().split("T")[0],
//       visit_porpous: "",
//     });
//     setErrors({});
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       {/* Heading and Add Visitor Button */}
//       <div className="flex items-center gap-3">
//         <FaPlus
//           className="ml-5 text-lg cursor-pointer text-turquoise"
//           onClick={() => setIsModalOpen(true)}
//         />
//         <h1 className="mb-1 text-xl font-semibold">Add Visitor</h1>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1050]">
//           <div className="bg-white max-w-[1300px] w-[90%] max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-md relative">
//             <button onClick={closeModal} className="absolute text-xl text-gray-600 top-2 right-2 hover:text-gray-800">
//               &times;
//             </button>
//             <h2 className="mb-8 text-xl font-semibold">Add Visitor</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 {[
//                   { label: "Name", name: "visit_name", type: "text", placeholder: "Enter visitor's name" },
//                   { label: "Mobile Number", name: "visit_mobileno", type: "number", placeholder: "Enter mobile number" },
//                   { label: "Expected Entry Date", name: "visit_expect_date_of_entry_date", type: "date" },
//                   { label: "Valid Till Date", name: "visit_valid_till_date", type: "date" },
//                   { label: "Purpose of Visit", name: "visit_porpous", type: "text", placeholder: "Enter purpose" },
//                   { label: "Address", name: "visit_location", type: "textarea", placeholder: "Enter address" },
//                 ].map((field, idx) => (
//                   <div key={idx} className="mb-4">
//                     <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
//                       {field.label} <span className="text-red-600">*</span>
//                     </label>
//                     {field.type === "textarea" ? (
//                       <textarea
//                         id={field.name}
//                         name={field.name}
//                         placeholder={field.placeholder}
//                         value={visitorDetails[field.name]}
//                         onChange={handleChange}
//                         className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
//                       />
//                     ) : (
//                       <input
//                         id={field.name}
//                         name={field.name}
//                         type={field.type}
//                         placeholder={field.placeholder}
//                         value={visitorDetails[field.name]}
//                         onChange={handleChange}
//                         className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
//                       />
//                     )}
//                     {errors[field.name] && <span className="text-sm text-red-600">{errors[field.name]}</span>}
//                   </div>
//                 ))}
//               </div>

//               {/* Action Buttons */}
//               <div className="flex justify-center gap-4 mt-6">
//                 <Button type="submit" className="w-32 px-4 py-2 text-white bg-green-500 hover:bg-green-600">
//                   Submit
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddVisitor;
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import VisitHandler from "@/handlers/VisitHandler";

const AddVisitor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createNewVisitorEntry } = VisitHandler();
  const [errors, setErrors] = useState({});
  const [visitorType, setVisitorType] = useState("Guest");
 
  const [visitorDetails, setVisitorDetails] = useState({
    visit_name: "",
    visit_mobileno: "",
    visit_location: "",
    visit_expect_date_of_entry_date: new Date().toISOString().split("T")[0],
    visit_valid_till_date: new Date().toISOString().split("T")[0],
    visit_porpous: "",
  });

  useEffect(() => {
    if (isModalOpen) {
      setVisitorDetails((prev) => ({
        ...prev,
        visit_expect_date_of_entry_date: new Date().toISOString().split("T")[0],
      }));
    }
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitorDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewVisitorEntry(visitorDetails);
      setVisitorDetails({
        visit_name: "",
        visit_mobileno: "",
        visit_location: "",
        visit_expect_date_of_entry_date: new Date().toISOString().split("T")[0],
        visit_valid_till_date: new Date().toISOString().split("T")[0],
        visit_porpous: "",
      });
      setErrors({});
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting visitor entry:", error.message);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <FaPlus className="ml-5 text-lg cursor-pointer text-turquoise" onClick={() => setIsModalOpen(true)} />
        <h1 className="mb-1 text-xl font-semibold">Add Visitor</h1>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1050]">
          <div className="bg-white max-w-[1300px] w-[90%] max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-md relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute text-xl text-gray-600 top-2 right-2 hover:text-gray-800">&times;</button>
            <h2 className="mb-8 text-xl font-semibold">Add {visitorType}</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Visitor Type</label>
              <select value={visitorType} onChange={(e) => setVisitorType(e.target.value)} className="block w-full p-2 mt-1 border border-gray-300 rounded-md">
                <option value="Guest">Guest</option>
                <option value="Staff">Staff</option>
                <option value="Service Provider">Service Provider</option>
              </select>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[{ label: "Name", name: "visit_name", type: "text" },
                  { label: "Mobile Number", name: "visit_mobileno", type: "number" },
                  { label: "Expected Entry Date", name: "visit_expect_date_of_entry_date", type: "date" },
                  { label: "Valid Till Date", name: "visit_valid_till_date", type: "date" },
                  { label: "Purpose of Visit", name: "visit_porpous", type: "text" },
                  { label: "Address", name: "visit_location", type: "textarea" }].map((field, idx) => (
                  <div key={idx} className="mb-4">
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                      {field.label} <span className="text-red-600">*</span>
                    </label>
                    {field.type === "textarea" ? (
                      <textarea id={field.name} name={field.name} value={visitorDetails[field.name]} onChange={handleChange} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                    ) : (
                      <input id={field.name} name={field.name} type={field.type} value={visitorDetails[field.name]} onChange={handleChange} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                    )}
                    {errors[field.name] && <span className="text-sm text-red-600">{errors[field.name]}</span>}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <Button type="submit" className="w-32 px-4 py-2 text-white bg-green-500 hover:bg-green-600">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddVisitor;
