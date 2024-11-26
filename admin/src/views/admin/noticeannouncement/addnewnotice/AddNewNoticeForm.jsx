// import React, { useState } from "react";
// import Input from "../../../../components/shared/Input";
// import Button from "../../../../components/ui/Button";
// import NoticeHandler from "../../../../handlers/NoticeHandler";

// const AddNewNoticeForm = () => {
//   const { createNoticeHandler } = NoticeHandler();
//   const [noticeform, setNoticeForm] = useState({
//     noticeheading: "",
//     description: "",
//     date: "",
//     owners: "",
//     tenants: "",
//     allmembers: "",
//     primarycontact: "",
//   });

//   const handleInput = (e) => {
//     // console.log(e.target.value);
//     const { name, value } = e.target;
//     // console.log("name", name);
//     // console.log("value", value);
//     setNoticeForm({ ...noticeform, [name]: value });
//   };

//   const submitHandler = () => {
//     console.log("noticeform", noticeform);
//     createNoticeHandler(noticeform);
//   };

//   return (
//     <div className="p-10 my-5 border rounded-lg bg-gray-100">
//       <div className="flex flex-col w-full gap-5 py-6">
//         <div>
//           <Input
//             label={<div>Notice Heading</div>}
//             type="text"
//             name="noticeheading"
//             placeholder={"Enter Notice Heading"}
//             size={"lg"}
//             onChange={handleInput}
//           />
//         </div>
//         <div>
//           <label
//             for="message"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Notice Description
//           </label>
//           <textarea
//             id="message"
//             rows="4"
//             name="description"
//             onChange={handleInput}
//             className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Write your thoughts here..."
//           ></textarea>
//         </div>
//         <div>
//           <Input
//             label={<div>Enter Expire Date</div>}
//             type="date"
//             name="date"
//             placeholder={"Enter Expire Date"}
//             size={"lg"}
//             onChange={handleInput}
//           />
//         </div>
//         <div className="grid grid-cols-4 gap-5 items-center my-5">
//           {" "}
//           <div className="flex flex-row items-center gap-3">
//             <label> Only for Owners</label>
//             <input
//               type="radio"
//               name="owners"
//               onChange={handleInput}
//               className="text-lg"
//             />
//           </div>
//           <div className=" flex flex-row items-center gap-3">
//             <label>Only for Tenants</label>
//             <input type="radio" name="tenants" onChange={handleInput} />
//           </div>
//           <div className=" flex flex-row items-center gap-3">
//             <label>All members</label>
//             <input type="radio" name="allmembers" onChange={handleInput} />
//           </div>
//           <div className=" flex flex-row items-center gap-3">
//             <label>All Primary Contacts</label>
//             <input type="radio" name="primarycontact" onChange={handleInput} />
//           </div>
//         </div>
//         <div className="flex justify-center mt-5">
//           <Button
//             className="max-w-sm"
//             type="submit"
//             onClick={submitHandler}
//             size="lg"
//           >
//             Submit
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNewNoticeForm;

import React, { useState } from "react";
import Input from "../../../../components/shared/Input";
import Button from "../../../../components/ui/Button";
import NoticeHandler from "../../../../handlers/NoticeHandler";

const AddNewNoticeForm = () => {
  const { createNoticeHandler } = NoticeHandler();
  const [noticeform, setNoticeForm] = useState({
    noticeHeading: "",
    noticeDescription: "",
    noticeExpireDate: "",
    userGroupId: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNoticeForm({ ...noticeform, [name]: value });
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setNoticeForm({ ...noticeform, userGroupId: value });
  };

  const submitHandler = () => {
    console.log("noticeform", noticeform);
    createNoticeHandler(noticeform);
  };

  return (
    <div className="p-10 my-5 border rounded-lg bg-gray-100">
      <div className="flex flex-col w-full gap-5 py-6">
        <div>
          <Input
            label={<div>Notice Heading</div>}
            type="text"
            name="noticeHeading"
            placeholder={"Enter Notice Heading"}
            size={"lg"}
            onChange={handleInput}
          />
        </div>
        <div>
          <label
            htmlFor="message" // Fixed htmlFor instead of for
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Notice Description
          </label>
          <textarea
            id="message"
            rows="4"
            name="noticeDescription"
            onChange={handleInput}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div>
          <Input
            label={<div>Enter Expire Date</div>}
            type="date"
            name="noticeExpireDate"
            placeholder={"Enter Expire Date"}
            size={"lg"}
            onChange={handleInput}
          />
        </div>
        <div className="grid grid-cols-4 gap-5 items-center my-5">
          {" "}
          <div className="flex flex-row items-center gap-3">
            <label>Only for Owners</label>
            <input
              type="radio"
              name="userGroupId" // Using the same name for all radio buttons
              value="1" // Value for Owners
              onChange={handleRadioChange}
              className="text-lg"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>Only for Tenants</label>
            <input
              type="radio"
              name="userGroupId" // Using the same name
              value="2" // Value for Tenants
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>All Members</label>
            <input
              type="radio"
              name="userGroupId" // Using the same name
              value="3" // Value for All Members
              onChange={handleRadioChange}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <label>All Primary Contacts</label>
            <input
              type="radio"
              name="userGroupId" // Using the same name
              value="4" // Value for All Primary Contacts
              onChange={handleRadioChange}
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button
            className="max-w-sm"
            type="submit"
            onClick={submitHandler}
            size="lg"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewNoticeForm;
