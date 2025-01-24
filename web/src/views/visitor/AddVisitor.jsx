import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "@/components/ui/Button";

const AddVisitor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [visitorDetails, setVisitorDetails] = useState({
    name: "",
    mobile: "",
    address: "",
    entryDate: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({}); // Validation errors

  // Set the default entry date to today's date when modal opens
  useEffect(() => {
    if (isModalOpen) {
      const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
      setVisitorDetails((prevDetails) => ({
        ...prevDetails,
        entryDate: today,
      }));
    }
  }, [isModalOpen]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitorDetails({ ...visitorDetails, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors for the field
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    if (!visitorDetails.name) formErrors.name = "Name is required.";
    if (!visitorDetails.mobile) formErrors.mobile = "Mobile number is required.";
    if (!visitorDetails.address) formErrors.address = "Address is required.";
    if (!visitorDetails.entryDate) {
      formErrors.entryDate = "Entry date is required.";
    } else if (visitorDetails.entryDate < today) {
      formErrors.entryDate = "Entry date cannot be in the past.";
    }
    if (!visitorDetails.purpose) formErrors.purpose = "Purpose of visit is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Visitor Details:", visitorDetails);
      alert("Visitor details submitted successfully!");
      setVisitorDetails({
        name: "",
        mobile: "",
        address: "",
        entryDate: "",
        purpose: "",
      });
      setIsModalOpen(false); // Close modal
    }
  };

  // Close modal and clear form
  const closeModal = () => {
    setVisitorDetails({
      name: "",
      mobile: "",
      address: "",
      entryDate: "",
      purpose: "",
    });
    setErrors({});
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Heading and Add Visitor Button */}
      <div className="flex items-center gap-3">
        <FaPlus
          className="text-lg text-turquoise cursor-pointer ml-5"
          onClick={() => setIsModalOpen(true)} // Open modal
        />
        <h1 className="text-xl font-semibold">Add Visitor</h1>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1050]">
          <div className="bg-white max-w-[1300px] w-[90%] max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-md relative">
            <button
              onClick={closeModal} // Close modal and clear data
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Visitor</h2>
            <form onSubmit={handleSubmit}>
              {/* Input fields in a grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Name", name: "name", type: "text", placeholder: "Enter visitor's name" },
                  { label: "Mobile Number", name: "mobile", type: "number", placeholder: "Enter mobile number" },
                  { label: "Purpose of Visit", name: "purpose", type: "text", placeholder: "Enter purpose of visit" },
                  { label: "Expected Entry Date", name: "entryDate", type: "date" },
                  { label: "Address", name: "address", type: "textarea", placeholder: "Enter address" },
                ].map((field, idx) => (
                  <div key={idx} className="mb-4">
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                      {field.label} <span className="text-red-600">*</span>
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={visitorDetails[field.name]}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={visitorDetails[field.name]}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                      />
                    )}
                    {errors[field.name] && <span className="text-red-600 text-sm">{errors[field.name]}</span>}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center align-center gap-4 mt-6">
                {/* <Button
                  type="button"
                  onClick={closeModal}
                  className="bg-red-500 text-white hover:bg-red-600 w-32 text-sm py-2 px-4"
                >
                  Cancel
                </Button> */}
                <Button
                  type="submit"
                  className="bg-green-500 text-white hover:bg-green-600 w-32 text-sm py-2 px-4"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddVisitor;
