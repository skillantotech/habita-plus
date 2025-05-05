// import React from "react";
// import { FaAngleDoubleRight } from "react-icons/fa";

// const UrlPath = ({ paths }) => {
//   return (
//     <div className="flex gap-2 items-center text-lime">
//       {paths?.map((el, index) => (
//         <span>
//           {" "}
//           {index !== paths.length - 1 ? (
//             <span className="flex flex-row items-center ">
//               {el} <FaAngleDoubleRight />
//             </span>
//           ) : (
//             <span>{el}</span>
//           )}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default UrlPath;


import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const UrlPath = ({ paths }) => {
  return (
    <div className="flex gap-2 items-center text-lime">
      {paths?.map((el, index) => (
        <span key={index} className="flex items-center">
          {el}
          {index !== paths.length - 1 && (
            <FaAngleDoubleRight className="ml-2 mr-2" />
          )}
        </span>
      ))}
    </div>
  );
};

export default UrlPath;

