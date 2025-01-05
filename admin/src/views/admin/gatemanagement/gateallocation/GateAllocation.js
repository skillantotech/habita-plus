import React, { useEffect, useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Input from "../../../../components/shared/Input";
import UrlPath from "../../../../components/shared/UrlPath";
import { FaPlus } from "react-icons/fa";
import Button from "../../../../components/ui/Button";
import GateListHandler from "../../../../handlers/GateListHandler";
import GateAllocationHandler from "../../../../handlers/GateUserListHandler";

function GateAllocation() {
    const paths = ["Gate Management", "Guard Profile Creation", "Gate Allocation"];

    const [gateData, setGateData] = useState([]);
    const [securityUserData, setSecurityUserData] = useState([]);

    const { getGateListHandler } = GateListHandler();
    const { getGateUserList } = GateAllocationHandler();

    const transformGateData = (response) => {
        if (!response?.data) return [];
        
        return response.data.map(element => ({
          ...element,
          gateNumbar: element.gateNumber,
          gateName: element.gateName,
          societyId: element.societyId,
          gateId: element.gateId
        }));
      };

    
      const transformSecurityUserData = (response) => {
        if (!response || !Array.isArray(response)) return [];
    
        return response.map(element => ({
            profileId: element.profileId, // Keep profileId if needed
            firstName: element.firstName || '', // Default to empty string if undefined
            lastName: element.lastName || '',
            email: element.email || '',
            mobileNo: element.mobileNo || '', // Include mobile number if needed
            profilePhoto: element.profilePhoto || null, // Handle profile photo
            idProof: element.idProof || null, // Handle ID proof
            roleId: element.roleId || null, // Include roleId
            status: element.status || 'inactive', // Default status if needed
            createdAt: element.createdAt || null, // Include createdAt
            updatedAt: element.updatedAt || null // Include updatedAt
        }));
    };
    

    const countryCodes = [
        { gateNo: "1", gateName: "Gate One" },
        { gateNo: "44", gateName: "Gate Fourtyfour" },
        { gateNo: "91", gateName: "Gate Nintynine" },
        { gateNo: "86", gateName: "Gate Eightysix" },
        // Add more country codes as needed
    ];

    useEffect(()=>{
        getGateListHandler()
        .then((res)=>{
            setGateData(transformGateData(res.data));
        });

        getGateUserList()
        .then((res)=>{
            setSecurityUserData(transformSecurityUserData(res));
        })

    },[])

    // console.log(gateData);
    // console.log("Index Zero: ",gateData[0]);

    console.log("Gate user Data: ", securityUserData);


    return (
        <>
            <UrlPath paths={paths} />

            <div className="p-10 my-5 border rounded-lg bg-gray-100">
                <div className="text-xl font-sans font-semibold text-lime">
                    Gate Allocation
                </div>

                <div className="grid grid-cols-3 gap-5 items-center">
                    <select
                        className="w-[15rem] mt-8 block border-gray-300 py-[15px] rounded-md shadow-sm focus:border-turquoise focus:ring focus:ring-turquoise focus:ring-opacity-50"
                    >
                        <option value={null}>
                            Select Your Gate Gate No.
                        </option>
                        {gateData.map((item) => (
                            <option key={item.gateNumbar} value={item.gateId}>
                                GateNo:{item.gateNumbar} - {item.gateName} - {item.gateId}
                            </option>
                        ))}
                    </select>



                    <select
                        className="w-[15rem] mt-8 block border-gray-300 py-[15px] rounded-md shadow-sm focus:border-turquoise focus:ring focus:ring-turquoise focus:ring-opacity-50"
                    >
                        <option value={null}>
                            Select Guard Profile
                        </option>
                        {securityUserData.map((item) => (
                            <option key={item.profileId} value={item.profileId}>
                                {item.firstName} - {item.lastName} - {item.profileId}
                            </option>
                        ))}
                    </select>


                    <div className="mt-8">
                        <Button
                            // onClick={addGateHandler} 
                            className="flex items-center">
                            <FaPlus className="mr-2" /> Add Gate
                        </Button>
                    </div>

                </div>

                <div className="max-w-md mx-auto mt-6 flex justify-center">
                    <Button 
                    // onClick={handleSubmit} 
                    size="md">
                        Submit
                    </Button>
                </div>

            </div>
        </>
    )
}

export default GateAllocation