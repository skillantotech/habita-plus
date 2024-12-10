import React, { useRef, useState } from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import { FaCamera } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import imageCompression from "browser-image-compression";
import Button from "../../../../components/ui/Button";
import { MdOutlineCancel } from "react-icons/md";

const GateAllocation = () => {
  const paths = ["Gate Management", "Gate Allocation"];
  const Heading = ["Gate Allocation: Security Guard User Creation"];
  const fileInputRef = useRef(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photomsg, setPhotomsg] = useState("");
  const [unitnumber, setUnitnumber] = useState(" ");
  const [tower, setTower] = useState("");
  const [floor, setFloor] = useState("");
  const [unit, setUnit] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [countryCode, setCountryCode] = useState(""); // New state for country code
  const [mobileNumber, setMobileNumber] = useState("");
  const [idCode, setIdCode] = useState("")

  // const handleAddField = () => {
  //   setSubmittedData([
  //     ...submittedData,
  //     {
  //       tower,
  //       floor,
  //       unit,
  //       unitnumber, // Fixed the reference here
  //     },
  //   ]);
  //   console.log(submittedData);

  //   setTower("");
  //   setFloor("");
  //   setUnit("");
  //   setUnitnumber("");
  // };

  const handleAddField = () => {
    if (tower.trim() && floor.trim() && unit.trim()) {
      const combinedUnitNumber = concatinput();
      setSubmittedData([
        ...submittedData,
        {
          tower,
          floor,
          unit,
          unitnumber: combinedUnitNumber,
        },
      ]);

      setTower("");
      setFloor("");
      setUnit("");
      // setUnitnumber("");
    } else {
      alert("Please fill in all the field before adding.");
    }
  };

  const concatinput = () => {
    return tower + floor + unit;
  };

  const handleRemoveField = (indexToRemove) => {
    setSubmittedData((prevData) =>
      prevData.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        setPhotomsg(
          "The image size is above 1MB. Please choose a smaller file."
        );
        return;
      } else {
        setPhotomsg("");
      }

      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);
        const base64 = await convertToBase64(compressedFile);
        setProfilePhoto(base64);
      } catch (error) {
        console.error("Error compressing the image:", error);
      }
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const countryCodes = [
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    // Add more country codes as needed
  ];

  const documentTypeList = [
    { idCode: "1", document: "Adhaar" },
    { idCode: "2", document: "Pan Card" },
    { idCode: "3", document: "Company Id" },
    { idCode: "4", document: "Voter Id" },
    // Add more country codes as needed
  ];

  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Profile Details
        </div>
        <div className="flex flex-row mt-5">
          <div className="flex items-center gap-5">
            <div
              className="relative h-28 w-28 rounded-full border-2 border-lime"
              style={{
                backgroundImage: profilePhoto ? `url(${profilePhoto})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <FaCamera
                onClick={handleIconClick}
                className="absolute bottom-0 right-0 bg-lime text-white text-[30px] p-2 rounded-full cursor-pointer"
                size={38}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </div>
            <div>
              <h2>Choose Profile Photo</h2>
              <div className="text-red-700">{photomsg}</div>
            </div>
          </div>
        </div>

        <div className="sm:grid md:flex gap-5 items-center py-6">
          <div className="">
            <label className=" ml-1 -mt-3 pb-2 block  text-sm font-medium text-gray-900 dark:text-white">
              MR./MRS.
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-28 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>MR .</option>
              <option>MRS .</option>
            </select>
          </div>
          <Input
            className="w-72"
            label={<div>First Name</div>}
            type="text"
            placeholder={"Enter Your First Name"}
            size={"lg"}
          />
          <Input
            className="w-72"
            label={<div>Last Name</div>}
            type="text"
            placeholder={"Enter Your Last Name"}
            size={"lg"}
          />
        </div>

        <div className="sm:grid md:flex items-center gap-5">
          <div className="sm:grid md:flex grid-cols-3 gap-5">
            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">Country Code</label>
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-28 mt-1 block border-gray-300 py-[15px] rounded-md shadow-sm focus:border-turquoise focus:ring focus:ring-turquoise focus:ring-opacity-50"
              >
                <option value="91">
                  +91
                </option>
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code} - {item.country}
                  </option>
                ))}
              </select>
            </div>
            <Input
              className="w-72"
              label={<div>Mobile No.</div>}
              type="text"
              placeholder={"Enter Mobile Number"}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              size={"lg"}
            />

            <Input
              className="w-72"
              label={<div>Email</div>}
              type="email"
              placeholder={"Enter Your Email"}
              size={"lg"}
            />
          </div>


        </div>

        <div className="sm:grid md:flex mt-6 grid-cols-2 items-center gap-14">

          <div className="sm:grid md:flex flex flex-col w-72">
            <label className="block text-gray-800 font-semibold">Document Upload</label>
            <select
              value={idCode}
              onChange={(e) => setIdCode(e.target.value)}
              className="mt-2 block w-full border-gray-300 py-[15px] rounded-md shadow-sm focus:border-turquoise focus:ring focus:ring-turquoise focus:ring-opacity-50"
            >
              <option value="" disabled>
                Select your Id type
              </option>
              {documentTypeList.map((item) => (
                <option key={item.idCode} value={item.idCode}>
                  {item.idCode} - {item.document}
                </option>
              ))}
            </select>
          </div>

          <div className="p-8 my-1 border rounded-lg">
            <Input
              label={
                <div>
                  Upload Documents (Image,Doc.,Pdf,Excel,zip . Max size 2MB .)
                </div>
              }
              type="file"
              placeholder={"Enter Notice Heading"}
              size={"lg"}
            />
          </div>


        </div>

      </div>

      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Gate Allocation
        </div>

        <div className="grid grid-cols-3 gap-5 items-center">
          <Input
            className="w-72"
            label={"Gate No."}
            type="text"
            placeholder={"Select Your Gate No."}
            size={"lg"}
          />
        </div>

        <div className="grid grid-cols-4 mt-5 ">
          {submittedData.map((data, index) => (
            <div
              key={index}
              className="relative p-5 m-2 border rounded-lg bg-white"
            >
              <MdOutlineCancel
                onClick={() => handleRemoveField(index)}
                className="absolute  right-2 top-1 text-red-700 cursor-pointer text-xl"
              />

              <p>
                <strong>Tower/Block:</strong> {data.tower}
              </p>
              <p>
                <strong>Floor Number:</strong> {data.floor}
              </p>
              <p>
                <strong>Unit Number:</strong> {data.unit}
              </p>
              <p>
                <strong>Select Unit Number:</strong> {data.unitnumber}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="text-xl font-sans font-semibold text-lime">
          Role Allocation
        </div>
        <div className="flex grid-cols-6 gap-5 items-center my-5">
          <div className="w-40 flex flex-row items-center gap-3">
            <label className="text-lg">Security</label>
            <input type="radio" name="drone" className="text-lg" />
          </div>
          <div className="w-40 flex flex-row items-center gap-3">
            <label>Supervisor</label>
            <input type="radio" name="drone" />
          </div>
          <div className="w-40 flex flex-row items-center gap-3">
            <label>Facility Manager</label>
            <input type="radio" name="drone" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button className="max-w-sm" type="submit" size="lg">
          Add User
        </Button>
      </div>
    </div>
  );
};

export default GateAllocation;
