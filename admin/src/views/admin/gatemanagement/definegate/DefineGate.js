import { React, useState } from "react";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Button from "../../../../components/ui/Button";
import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const DefineGate = () => {
  const [gate, setGate] = useState("");
  const [showallgate, setShowallgate] = useState([]);
  const paths = ["Gate Management", "Define Gate"];
  const Heading = ["Define Gate"];

  const addgateHandler = () => {
    setShowallgate([...showallgate, { gate }]);
    console.log(showallgate);
  };

  const removegateHandler = (indexToRemove) => {
    setShowallgate((prevData) =>
      prevData.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="px-5">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      {/* <div className="text-2xl font-semibold text-lime mt-4">Add Unit</div> */}
      <PageHeading heading={Heading} />
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="grid grid-cols-3 gap-4">
          <div>Number of Gate</div>
          <div>
            <Input
              // label={<div>First Name</div>}
              type="text"
              placeholder={"Enter no of gates"}
              size={"lg"}
            />
          </div>
          <div>
            <Button className="max-w-sm" type="submit" size="md">
              Submit
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>Define Gate </div>
          <div>
            <Input
              label={<div>Define Gate</div>}
              onChange={(e) => setGate(e.target.value)}
              type="text"
              placeholder={"Enter Gate"}
              size={"lg"}
            />

            {/* All Define gates */}
            <div>
              {showallgate.map((data, index) => (
                <div
                  key={index}
                  className="relative p-5 m-2 border rounded-lg bg-white"
                >
                  <MdOutlineCancel
                    onClick={() => removegateHandler(index)}
                    className="absolute  right-2 top-1 text-red-700 cursor-pointer text-xl"
                  />
                  <p>
                    <strong>Gate{index + 1}:</strong> {data.gate}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <FaPlus
              className="text-lime text-2xl mt-[40px]"
              onClick={addgateHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefineGate;
