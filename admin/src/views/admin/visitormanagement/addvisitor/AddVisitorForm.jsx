// import React, { useEffect, useState } from "react";
// import Button from "../../../../components/ui/Button";
// import Input from "../../../../components/shared/Input";
// import VisitEntryHandler from "../../../../handlers/VisitorEntryHandler";

// const AddVisitorForm = ({ visitorRelationships }) => {

 
// const { getTypeofVisitor, createNewVisitorEntry } = VisitEntryHandler();
//   const [visitorType, setVisitorType] = useState([]);
//   const [formData, setFromData] = useState({
//     visit_expect_date_of_entry_date: "",// Initialize as empty
//     visit_name: "",
//     visit_type_Id: "",
//     visit_mobileno: "",
//     visit_porpous: "",
//     visit_relationship: "",
//   });
//    const [errors, setErrors] = useState({
//     visit_name: "",
//     visit_mobileno: "",
//     visit_porpous: "",
//     visit_relationship: "", // Add error for relationship
//   });

  
//   useEffect(() => {
//     // Set the default value for the "Date of Entry" field to the current date
//     const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
//     setFromData((prevData) => ({
//       ...prevData,
//       visit_expect_date_of_entry_date: currentDate,
//     }));

//     const fetchVisitorType = async () => {
//       try {
//         const result = await getTypeofVisitor();
//         setVisitorType(result.data.data);
//       } catch (err) {
//         console.error(err.message);
//       }
//     };
//     fetchVisitorType();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     // Validation for specific fields
//     if (name === "visit_name" || name === "visit_porpous" || name === "visit_relationship") {
//       // Only allow alphabets and spaces for these fields
//       if (/^[a-zA-Z\s]*$/.test(value)) {
//         setFromData({ ...formData, [name]: value });
//       }
//     } else if (name === "visit_mobileno") {
//       // Allow only digits for mobile number and limit length to 10
//       if (/^\d*$/.test(value) && value.length <= 10) {
//         setFromData({ ...formData, [name]: value });
//       }
//     } else {
//       setFromData({ ...formData, [name]: value });
//     }
//   };

//   // Validation function
//   const validateForm = () => {
//     let isValid = true;
//     let tempErrors = { visit_name: "", visit_mobileno: "", visit_porpous: "", visit_relationship: "" };

//     // Name validation: should only contain alphabets
//     if (!/^[a-zA-Z\s]+$/.test(formData.visit_name)) {
//       tempErrors.visit_name = "Name should contain only alphabets";
//       isValid = false;
//     }

//     // Mobile number validation: should be 10 digits
//     if (!/^\d{10}$/.test(formData.visit_mobileno)) {
//       tempErrors.visit_mobileno = "Mobile number should be 10 digits";
//       isValid = false;
//     }

//     // Purpose of visit validation: should only contain alphabets
//     if (!/^[a-zA-Z\s]+$/.test(formData.visit_porpous)) {
//       tempErrors.visit_porpous = "Purpose of visit should contain only alphabets";
//       isValid = false;
//     }

//     // Relationship validation: should only contain alphabets
//     if (!/^[a-zA-Z\s]*$/.test(formData.visit_relationship)) {
//       tempErrors.visit_relationship = "Relationship should contain only alphabets";
//       isValid = false;
//     }

//     setErrors(tempErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (validateForm()) {
//       console.log("form data", formData);
//       createNewVisitorEntry(formData);
//     }
//   };

//   return (
//     <div>
//       <div className="p-10 my-5 border rounded-lg bg-gray-100">
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-3 gap-5 items-center py-6">
//             <Input
//               label={<div>Date of Entry</div>}
//               type="date"
//               placeholder={"Date of Entry"}
//               size={"lg"}
//               name="visit_expect_date_of_entry_date"
//               value={formData.visit_expect_date_of_entry_date} // Use current date as value
//               onChange={handleChange} // Handle input change
//               min={new Date().toISOString().split("T")[0]} // Disable past dates
//             />

//             <Input
//               label={<div> Name of Visitor</div>}
//               type="text"
//               placeholder={"Enter Name of Visitor"}
//               size={"lg"}
//               name="visit_name"
//               value={formData.visit_name}
//               onChange={handleChange} // Handle input change
//               error={errors.visit_name} // Show validation error
//             />
//             {errors.visit_name && <div className="text-red-500">{errors.visit_name}</div>}

//             {/* <div>
//               <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
//                 Type Of Visitor
//               </label>
//               <select
//                 id="countries"
//                 name="visit_type_Id"
//                 value={formData.visit_type_Id}
//                 onChange={handleChange} // Handle input change
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option selected value="">
//                   Select type of Visitor
//                 </option>
//                 {visitorType.map((el) => (
//                   <option key={el.visit_type_Id} value={el.visit_type_Id}>
//                     {el.visit_type_Description}
//                   </option>
//                 ))}
//               </select>
//             </div> */}
             
//           {/* <select
//             name="visit_relationship"
//             value={formData.visit_relationship}
//             onChange={handleChange}
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           >
//             <option value="">Select Relationship</option>
//             {visitorRelationships.map((relationship) => (
//               <option key={relationship.id} value={relationship.Visit_relation_Description}>
//                 {relationship.Visit_relation_Description}
//               </option>
//             ))}
//           </select> */}
//         <div>
//   <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
//     Type Of Visitor
//   </label>
//   <select
//     name="visit_relationship"
//     value={formData.visit_relationship}
//     onChange={handleChange}
//     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//   >
//     <option value="">Select Type of Visitor</option>
//     {visitorRelationships.map((relationship) => (
//       <option key={relationship.id} value={relationship.Visit_relation_Description}>
//         {relationship.Visit_relation_Description}
//       </option>
//     ))}
//   </select>
//   {errors.visit_relationship && <div className="text-red-500">{errors.visit_relationship}</div>}
// </div>

        
       

//             <Input
//               label={<div>Visitor Mobile No.</div>}
//               type="text"
//               placeholder={"Enter Visitor Mobile No."}
//               size={"lg"}
//               name="visit_mobileno"
//               value={formData.visit_mobileno}
//               onChange={handleChange}
//               error={errors.visit_mobileno} // Show validation error
//             />
//             {errors.visit_mobileno && <div className="text-red-500">{errors.visit_mobileno}</div>}

//             <Input
//               label={<div>Relationship</div>}
//               type="text"
//               placeholder={"Enter Your Relationship with Visitor"}
//               size={"lg"}
//               name="visit_relationship"
//               value={formData.visit_relationship}
//               onChange={handleChange}
//               error={errors.visit_relationship} // Show validation error
//             />
//             {errors.visit_relationship && <div className="text-red-500">{errors.visit_relationship}</div>}

//             <Input
//               label={<div>Purpose of Visit</div>}
//               type="text"
//               placeholder={"Enter Your Purpose of Visit"}
//               size={"lg"}
//               name="visit_porpous"
//               value={formData.visit_porpous}
//               onChange={handleChange}
//               error={errors.visit_porpous} // Show validation error
//             />
//             {errors.visit_porpous && <div className="text-red-500">{errors.visit_porpous}</div>}
//           </div>

//           <div className="flex justify-center mt-5">
//             <Button
//               className="max-w-sm"
//               type="submit"
//               size="lg"
//             >
//               Submit
//             </Button>
//           </div>
        
//         </form>
        
//       </div>
//     </div>
//   );
// };

// export default AddVisitorForm;

import React, { useEffect, useState } from "react";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/shared/Input";
import VisitEntryHandler from "../../../../handlers/VisitorEntryHandler";

const AddVisitorForm = () => {
  const { getTypeofVisitor, createNewVisitorEntry } = VisitEntryHandler();
  const [visitorType, setVisitorType] = useState([]);
  const [formData, setFromData] = useState({
    visit_expect_date_of_entry_date: "",
    visit_name: "",
    visit_type_Id: "",
    visit_mobileno: "",
    visit_porpous: "",
  });
  useEffect(() => {
    const fetchVisitorType = async () => {
      try {
        const result = await getTypeofVisitor();
        console.log("reslt of visitor type", result);
        setVisitorType(result.data.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchVisitorType();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("form data", formData);
    createNewVisitorEntry(formData);
  };

  return (
    <div>
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="grid grid-cols-3 gap-5 items-center py-6">
          <Input
            label={<div>Date of Entry</div>}
            type="date"
            placeholder={"Date of Entry"}
            size={"lg"}
            name="visit_expect_date_of_entry_date"
            value={formData.visit_expect_date_of_entry_date}
            onChange={handleChange} // Handle input change
          />

          <Input
            label={<div> Name of Visitor</div>}
            type="text"
            placeholder={"Enter Name of Visitor"}
            size={"lg"}
            name="visit_name"
            value={formData.visit_name}
            onChange={handleChange} // Handle input change
          />
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Type Of Visitor
            </label>
            <select
              id="countries"
              name="visit_type_Id"
              value={formData.visit_type_Id}
              onChange={handleChange} // Handle input change
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="">
                Select type of Visitor
              </option>
              {visitorType.map((el) => (
                <option value={el.visit_type_Id}>
                  {el.visit_type_Description}
                </option>
              ))}
            </select>
          </div>
          <Input
            label={<div>Visitor Mobile No.</div>}
            type="number"
            placeholder={"Enter Visitor Mobile No."}
            size={"lg"}
            name="visit_mobileno"
            value={formData.visit_mobileno}
            onChange={handleChange}
          />
          <Input
            label={<div>Relationship</div>}
            type="text"
            placeholder={"Enter Your Relationship with Visitor"}
            size={"lg"}
          />
          <Input
            label={<div>Porpous of Visit</div>}
            type="text"
            placeholder={"Enter Your Porpous of Visit"}
            size={"lg"}
            name="visit_porpous"
            value={formData.visit_porpous}
            onChange={handleChange}
          />
          {/* <Input label={<div>Valid Till Date</div>} type="date" size={"lg"} /> */}
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <Button
          className="max-w-sm"
          onClick={handleSubmit}
          type="submit"
          size="lg"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddVisitorForm;
