// import React, { useEffect, useState } from "react";
// import Dialog from "../../../../components/ui/Dialog";
// import Input from "../../../../components/shared/Input";

// // Helper to format the date to "YYYY-MM-DD"
// const formatDate = (date) => {
//   if (!date) return "";
//   const d = new Date(date);
//   const month = String(d.getMonth() + 1).padStart(2, "0");
//   const day = String(d.getDate()).padStart(2, "0");
//   const year = d.getFullYear();
//   return `${year}-${month}-${day}`;
// };

// const ViewVisitorDetailsModal = ({ isOpen, onClose, formData }) => {
//   const [visitorViewForm, setVisitorViewForm] = useState(formData);

//   useEffect(() => {
//     setVisitorViewForm(formData); // Set the form data when component mounts or formData changes
//   }, [formData]);

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setVisitorViewForm({ ...visitorViewForm, [name]: value });
//   };

//   const handleRadioChange = (value) => {
//     setVisitorViewForm({ ...visitorViewForm, userGroupId: value });
//   };

//   return (
//     <Dialog
//       isOpen={isOpen}
//       onClose={onClose}
//       className="h-full w-full overflow-auto p-10"
//       contentClassName={`w-full h-full bg-white lg:max-w-6xl rounded-lg overflow-auto scrollbar p-5`}
//       overlayClassName="backdrop-blur"
//     >
//       <div className="p-10 my-5 border rounded-lg bg-gray-100">
//         <div className="flex flex-col w-full gap-5 py-6">
//           <div>
//             <Input
//                       label={<div>Date of Entry <span className="text-red-500">*</span></div>}
//                       type="date"
//                       placeholder="Date of Entry"
//                       size="lg"
//                       name="visit_expect_date_of_entry_date"
//                       value={visitorViewForm?.visit_expect_date_of_entry_date || ""}
//                       onChange={handleChange}
//                       min={new Date().toISOString().split("T")[0]} 
//                     />
//             {/* <Input
//               label="Notice Heading"
//               value={visitorViewForm?.noticeHeading || ""}
//               type="text"
//               name="noticeHeading"
//               placeholder={"Enter Notice Heading"}
//               size={"lg"}
//               onChange={handleInput}
//             /> */}
//           </div>

//           <div>
//             {/* <label
//               htmlFor="message"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Notice Description
//             </label> */}
//           <Input
//                       label={<div>Name of Visitor <span className="text-red-500">*</span></div>}
//                       type="text"
//                       placeholder="Enter Name of Visitor"
//                       size="lg"
//                       name="visit_name"
//                        value={visitorViewForm?.visit_name || ""}
//                       onChange={handleChange}
                     
//                    />   
//           </div>

//           {/* Date Field */}
//           <div>
//              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
//               Enter Expire Date <span className="text-red-500">*</span>
//             </label>
//             <select
//               id="visitorType"
//               name="visit_type_Id"
//               value={visitorViewForm?.visit_type_Id || ""}
//               onChange={handleChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             >
//               <option value="" disabled>Select type of Visitor</option>
//               {visitorTypes.length > 0 ? (
//                 visitorTypes.map((type) => (
//                   <option key={type.Visit_relation_Id} value={type.Visit_relation_Id}>
//                     {type.Visit_relation_Description}
//                   </option>
//                 ))
//               ) : (
//                 <option value="" disabled>Loading...</option>
//               )}
//             </select>
//             </div>
//            <Input
//                       label={<div>Visitor Mobile No. <span className="text-red-500">*</span></div>}
//                       type="text"
//                       placeholder="Enter Visitor Mobile No."
//                       size="lg"
//                       name="visit_mobileno"
//                      value={visitorViewForm?.visit_mobileno || ""}
//                       onChange={handleChange}
//                     r
//                    />    
//           </div>

//           {/* Radio Buttons */}
//           <div className="grid grid-cols-4 gap-5 items-center my-5">
//              <Input
//                       label={<div>Relationship <span className="text-red-500">*</span></div>}
//                       type="text"
//                       placeholder="Enter Your Relationship with Visitor"
//                       size="lg"
//                       name="relationship"
//                       value={visitorViewForm?.relationship || ""}
//                       onChange={handleChange}
                   
//                      />  
//             </div>
//             <div className="flex flex-row items-center gap-3">
//                <Input
//                           label={<div>Purpose of Visit <span className="text-red-500">*</span></div>}
//                           type="text"
//                           placeholder="Enter Your Purpose of Visit"
//                           size="lg"
//                           name="visit_porpous"
//                           value={visitorViewForm?.visit_porpous || ""}
//                           onChange={handleChange}
                       
//                          />    
//             </div>
//             <div className="flex flex-row items-center gap-3">
//                 <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
//               Coming From 
//             </label>
//             <textarea
//               placeholder="Enter Visitor location"
//               name="visit_location"
//               value={visitorViewForm?.visit_location || ""}
//               onChange={handleChange}
            
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//             </div>
//             {/* <div className="flex flex-row items-center gap-3">
//               <label>All Primary Contacts</label>
//               <input
//                 type="radio"
//                 name="userGroupId"
//                 checked={visitorViewForm.userGroupId === 4} // Check if the value is 4
//                 onChange={() => handleRadioChange(4)}
//               />
//             </div> */}
//           </div>

//           {/* <div className="flex justify-center mt-5">
//           <Button
//             className="max-w-sm"
//             type="submit"
//             onClick={() => onEditHandler(noticeform)}
//             size="lg"
//           >
//             Update
//           </Button>
//         </div> */}
//         </div>
//       </Dialog>
//     {/* </Dialog> */}
    
//   );
// };

// export default ViewVisitorDetailsModal;
import React, { useEffect, useState } from "react";
import Dialog from "../../../../components/ui/Dialog";
import Input from "../../../../components/shared/Input";

// Helper to format the date to "YYYY-MM-DD"
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

const ViewVisitorDetailsModal = ({ isOpen, onClose, formData, visitorTypes = [] }) => {
  const [visitorViewForm, setVisitorViewForm] = useState(formData);

  useEffect(() => {
    setVisitorViewForm(formData); // Update form data when the component mounts or when formData changes
  }, [formData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setVisitorViewForm({ ...visitorViewForm, [name]: value });
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      className="h-full w-full overflow-auto p-10"
      contentClassName="w-full h-full bg-white lg:max-w-6xl rounded-lg overflow-auto scrollbar p-5"
      overlayClassName="backdrop-blur"
    >
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
         <div className="grid grid-cols-3 gap-5 items-center py-6">
          {/* Date of Entry */}
          <div>
            <Input
              label={
                <div>
                  Date of Entry
                </div>
              }
              type="date"
              placeholder="Date of Entry"
              size="lg"
              name="visit_expect_date_of_entry_date"
              value={formatDate(visitorViewForm?.visit_expect_date_of_entry_date)}
              onChange={handleInput}
              min={new Date().toISOString().split("T")[0]} // Prevent selecting past dates
              readOnly
            />
          </div>

          {/* Visitor Name */}
          <div>
            <Input
              label={
                <div>
                  Name of Visitor
                </div>
              }
              type="text"
              placeholder="Enter Name of Visitor"
              size="lg"
              name="visit_name"
              value={visitorViewForm?.visit_name || ""}
              onChange={handleInput}
              readOnly
            />
          </div>

          {/* Visitor Type */}
          <div>
           <Input
              label={
                <div>
                  Type of Visitor 
                </div>
              }
              type="text"
              placeholder="Enter Type of Visitor"
              size="lg"
              name="visit_name"
              value={visitorViewForm?.visit_type_Id || ""}
              onChange={handleInput}
              readOnly
            />
            {/* <label className="block mb-1 text-sm font-medium text-gray-900">
              Type of Visitor <span className="text-red-500">*</span>
            </label>
            <select
              id="visitorType"
              name="visit_type_Id"
              value={visitorViewForm?.visit_type_Id || ""}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option value="" disabled>
                Select type of Visitor
              </option>
              {visitorTypes.length > 0 ? (
                visitorTypes.map((type) => (
                  <option key={type.Visit_relation_Id} value={type.Visit_relation_Id}>
                    {type.Visit_relation_Description}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Loading...
                </option>
              )}
            </select> */}
          </div>

          {/* Visitor Mobile Number */}
          <div>
            <Input
              label={
                <div>
                  Visitor Mobile No. 
                </div>
              }
              type="text"
              placeholder="Enter Visitor Mobile No."
              size="lg"
              name="visit_mobileno"
              value={visitorViewForm?.visit_mobileno || ""}
              onChange={handleInput}
              readOnly
            />
          </div>

          {/* Relationship */}
          <div>
            <Input
              label={
                <div>
                  Relationship 
                </div>
              }
              type="text"
              placeholder="Enter Your Relationship with Visitor"
              size="lg"
              name="relationship"
              value={visitorViewForm?.relationship || ""}
              onChange={handleInput}
              readOnly
            />
          </div>

          {/* Purpose of Visit */}
          <div>
            <Input
              label={
                <div>
                  Purpose of Visit 
                </div>
              }
              type="text"
              placeholder="Enter Your Purpose of Visit"
              size="lg"
              name="visit_porpous"
              value={visitorViewForm?.visit_porpous || ""}
              onChange={handleInput}
              readOnly
            />
          </div>

          {/* Visitor Location */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900">
              Coming From 
            </label>
            <textarea
              placeholder="Enter Visitor Location"
              name="visit_location"
              value={visitorViewForm?.visit_location || ""}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              readOnly
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ViewVisitorDetailsModal;
