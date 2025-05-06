import { React, useState } from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import DefineUnitForm from "./DefineUnitForm";
// import { FaPlus } from "react-icons/fa";
// import { MdOutlineCancel } from "react-icons/md";

const DefineUnit = () => {
  // const [gate, setGate] = useState("");
  // const [showallgate, setShowallgate] = useState([]);
  const paths = ["Building Management", "Define Unit"];
  const Heading = ["Define Units"];

  // const addgateHandler = () => {
  //   setShowallgate([...showallgate, { gate }]);
  //   console.log(showallgate);
  // };

  // const removegateHandler = (indexToRemove) => {
  //   setShowallgate((prevData) =>
  //     prevData.filter((_, index) => index !== indexToRemove)
  //   );
  // };

  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      {/* <div className="text-2xl font-semibold text-lime mt-4">Add Unit</div> */}
      <PageHeading heading={Heading} />
      <DefineUnitForm />
    </div>
  );
};

export default DefineUnit;
