import React, { useState } from "react";
import Input from "../../../../components/shared/Input";
import Button from "../../../../components/ui/Button";
// import ComplainHandler from "../../../../handlers/ComplainHandler"; // You'll need to create this handler

const ComplainEntryForm = () => {
//   const { createComplainHandler } = ComplainHandler(); // Use the appropriate function
  const [complainForm, setComplainForm] = useState({
    complainHeading: "",
    complainDescription: "",
    complainDate: "",
    userGroupId: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setComplainForm({ ...complainForm, [name]: value });
  };

  // const handleRadioChange = (e) => {
  //   const { value } = e.target;
  //   setComplainForm({ ...complainForm, userGroupId: value });
  // };

  const validateFields = () => {
    let tempErrors = {};
    if (!complainForm.complainHeading.trim())
      tempErrors.complainHeading = "Complain Heading is required.";
    if (!complainForm.complainDescription.trim())
      tempErrors.complainDescription = "Complain Description is required.";
    if (!complainForm.complainDate)
      tempErrors.complainDate = "Complain Date is required.";
    if (!complainForm.userGroupId)
      tempErrors.userGroupId = "Please select a user group.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

//   const submitHandler = () => {
//     if (validateFields()) {
//       console.log("complainForm", complainForm);
//       createComplainHandler(complainForm)
//         .then(() => {
//           setComplainForm({
//             complainHeading: "",
//             complainDescription: "",
//             complainDate: "",
//             userGroupId: "",
//           });
//           setErrors({});
//         })
//         .catch((err) => {
//           console.error("Error submitting form:", err);
//         });
//     } else {
//       console.error("Validation failed.");
//     }
//   };

  return (
    <div className="p-10 my-5 border rounded-lg bg-gray-100">
      <div className="flex flex-col w-full gap-5 py-6">
        <div>
          <Input
            label={
              <div>
                Complain Heading <span className="text-red-500 ml-1">*</span>
              </div>
            }
            type="text"
            name="complainHeading"
            placeholder="Enter Complain Heading"
            size="lg"
            value={complainForm.complainHeading}
            onChange={handleInput}
            className={errors.complainHeading ? "border-red-500" : ""}
          />
          {errors.complainHeading && (
            <p className="text-red-500 text-sm">{errors.complainHeading}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Complain Description <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            id="message"
            rows="4"
            name="complainDescription"
            value={complainForm.complainDescription}
            onChange={handleInput}
            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
              errors.complainDescription
                ? "border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Write your complaint here..."
          ></textarea>
          {errors.complainDescription && (
            <p className="text-red-500 text-sm">{errors.complainDescription}</p>
          )}
        </div>
        <div>
          <Input
            label={
              <div>
                Complain Date <span className="text-red-500 ml-1">*</span>
              </div>
            }
            type="date"
            name="complainDate"
            value={complainForm.complainDate}
            placeholder="Select Date"
            size="lg"
            onChange={handleInput}
            className={errors.complainDate ? "border-red-500" : ""}
          />
          {/* {errors.complainDate && (
            <p className="text-red-500 text-sm">{errors.complainDate}</p>
          )} */}
        </div>
        {/* <div className="grid grid-cols-4 gap-5 items-center my-5">
          <div className="flex flex-row items-center gap-3">
            <label>Only for Owners</label>
            <input
              type="radio"
              name="userGroupId"
              value="1"
              checked={complainForm.userGroupId === "1"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>Only for Tenants</label>
            <input
              type="radio"
              name="userGroupId"
              value="2"
              checked={complainForm.userGroupId === "2"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>All Members</label>
            <input
              type="radio"
              name="userGroupId"
              value="3"
              checked={complainForm.userGroupId === "3"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>All Primary Contacts</label>
            <input
              type="radio"
              name="userGroupId"
              value="4"
              checked={complainForm.userGroupId === "4"}
              onChange={handleRadioChange}
            />
          </div>
        </div> */}
        {/* {errors.userGroupId && (
          <p className="text-red-500 text-sm">{errors.userGroupId}</p>
        )} */}
        <div className="flex justify-center mt-5">
          <Button className="max-w-sm" type="button" size="lg">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComplainEntryForm;
