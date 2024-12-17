import React from "react";
import UrlPath from "../../../../components/shared/UrlPath";
import PageHeading from "../../../../components/shared/PageHeading";
import Input from "../../../../components/shared/Input";
import Button from "../../../../components/ui/Button";
import AddVisitorForm from "./AddVisitorForm";

const AddVisitor = () => {
  const paths = ["User", "New Visitor Entry"];
  const Heading = ["New Visitor Entry"];
  return (
    <div className="px-5 ">
      <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
        <UrlPath paths={paths} />
      </div>
      <PageHeading heading={Heading} />
      <AddVisitorForm />
    
    </div>
  );
};

 export default AddVisitor;
// import React, { useEffect, useState } from "react";
// import UrlPath from "../../../../components/shared/UrlPath";
// import PageHeading from "../../../../components/shared/PageHeading";
// import AddVisitorForm from "./AddVisitorForm";
// //import VisitorRelationshipHandler from "../../../../handlers/VisitorRelationshipHandler";
// //import VisitEntryHandler from "../../../../handlers/VisitorEntryHandler";

// const AddVisitor = () => {
//   const paths = ["User", "New Visitor Entry"];
//   const Heading = ["New Visitor Entry"];
//   //const { getVisitorRelationTable } = VisitorRelationshipHandler();
//   const { getTypeofVisitor } = VisitEntryHandler();
//   //const [visitorRelationshipsType, setVisitorRelationshipsType] = useState([]);

//   // useEffect(() => {
//   //   const fetchRelationships = async () => {
//   //     try {
//   //       const result = await getVisitorRelationTable({ page: 0, pageSize: 100 });
//   //       setVisitorRelationships(result.data.data);
//   //     } catch (err) {
//   //       console.error("Failed to fetch visitor relationships:", err);
//   //     }
//   //   };
//   //   fetchRelationships();
//   // }, []);

  
// // useEffect(() => {
// //     const fetchRelationshipsType = async () => {
// //       try {
// //         const result = await getTypeofVisitor({ page: 0, pageSize: 100 });
// //         setVisitorRelationshipsType(result.data.data);
// //       } catch (err) {
// //         console.error("Failed to fetch visitor relationships:", err);
// //       }
// //     };
// //     fetchRelationshipsType();
// //   }, []);
//   return (
//     <div className="px-5">
//       <div className="text-sm font-semibold my-2 flex items-center gap-2 text-gray-200">
//         <UrlPath paths={paths} />
//       </div>
//       <PageHeading heading={Heading} />
//       {/* <AddVisitorForm visitorRelationshipsType={visitorRelationshipsType} /> */}
//       <AddVisitorForm />
//     </div>
//   );
// };

// export default AddVisitor;
