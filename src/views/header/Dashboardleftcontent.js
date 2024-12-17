import  SideBarMenu  from "../../config/SideBarConfig";
import Accordion from "../../components/ui/Accordion";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const SubSection = ({ data, onClick, isActive }) => {
  return (
    // <div
    //   onClick={() => onClick(data.url)}
    //   className={`p-1 rounded-md cursor-pointer ${
    //     isActive ? "bg-lime text-gray-700" : "text-gray-300 "
    //   }`} // Apply style when active
    // >
    //   {data.name}
    // </div>
      <div
      onClick={() => onClick(data.url)}
      className={`p-1 rounded-md cursor-pointer flex items-center space-x-2 ${
        isActive ? "bg-lime text-gray-700" : "text-gray-300"
      }`} // Apply style when active
    >
      {/* Icon with fixed width and height */}
      {data.icon && (
        <img
          src={data.icon}
          alt={data.name}
         className="w-6 h-6 object-contain"
        />
      )}
      <span>{data.name}</span>
    </div>
  );
};

const Dashboardleftcontent = ({ role = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const MENU = SideBarMenu[role] || [];
  // console.log(role)
  // console.log(location.pathname);

  const onNavigation = (url) => {
    navigate(url);
  };

  const [expandedSection, setExpandedSection] = useState(null); // Track the expanded section

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index); // Toggle section visibility
  };

  return (
    // <section className="bg-sidebar h-full px-5 py-2">
    //   <div className="h-full overflow-y-auto no-scrollbar">
    //     <div className="space-y-2 w-full">
    //       {MENU.map((item, index) => (
    //         <Accordion
    //           key={index}
    //           title={<div className="py-2 font-bold ">{item.name}</div>}
    //         >
    //           <div className="space-y-1">
    //             {item.children.map((data, index) => (
    //               <SubSection
    //                 key={index}
    //                 data={data}
    //                 onClick={onNavigation}
    //                 isActive={location.pathname.slice(1) === data.url}
    //               />
    //             ))}
    //           </div>
    //         </Accordion>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="bg-sidebar h-full px-5 py-2">
      <div className="h-full overflow-y-auto no-scrollbar">
        <div className="space-y-2 w-full">
          {MENU.map((item, index) => (
            <Accordion
              key={index}
              title={
                <div
                  className="py-2 font-bold cursor-pointer"
                  onClick={() => toggleSection(index)} // Toggle section on click
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="text-lime-500 text-2xl" /> 
                    <span>{item.name}</span>
                  </div>
                  
                   {/* {item.name}  */}
                </div>
              }
            >
              {expandedSection === index && ( // Only show children when section is expanded
                <div className="space-y-1">
                  {item.children.map((data, index) => (
                    <div key={index}>
                      {/* Render the main section */}
                      <SubSection
                        data={data}
                        onClick={onNavigation}
                        isActive={location.pathname.slice(1) === data.url}
                      />

                      {/* Check if the current section has sub-children */}
                      {data.children && data.children.length > 0 && (
                        <div className="ml-4 space-y-1 ">
                          {data.children.map((subData, subIndex) => (
                            <SubSection
                              key={subIndex}
                              data={subData}
                              onClick={onNavigation}
                              isActive={
                                location.pathname.slice(1) === subData.url
                              }
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboardleftcontent;
