import React, { useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Input from "../../../../components/shared/Input";

function GateAllocation() {

    const [unit, setUnit] = useState("");
    const [tower, setTower] = useState("");
    const [floor, setFloor] = useState("");
    const [submittedData, setSubmittedData] = useState([]);

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




    return (
        <>
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
        </>
    )
}

export default GateAllocation