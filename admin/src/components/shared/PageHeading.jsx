import React from "react";
import { TiArrowForward } from "react-icons/ti";

const PageHeading = ({ heading }) => {
  return (
    <div className="flex gap-4">
      {heading?.map((ele, index) => (
        <span>
            {index !== heading.length - 1 ? (
              <div className="my-4 flex text-2xl font-semibold text-lime">
                {ele}
                <p className="ml-2 mt-2">
                <TiArrowForward />
                </p>
                
                </div>
            ):(
              <div className="my-[17px] flex text-2xl font-semibold text-lime">{ele}</div>
            )}
        </span>
        
      ))}
      
    </div>
  );
};
export default PageHeading;
