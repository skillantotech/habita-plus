import { useEffect } from "react";
import CommunityDirectories from "./components/directories/CommunityDirectories";
import PaymentDueReminder from "./components/payment/PaymentDueReminder";
import PostPreview from "./components/post/PostPreview";
import Cookies from "js-cookie";
import { AnnoucementPreview } from "../announcement";

const Dashboard = () => {
  useEffect(() => {
    console.log(Cookies.get("auth"));
    console.log(document.cookie);

  }, []);
  return (
    <div className="space-y-10">
      {/* <PaymentDueReminder
        amountDue={4000}
        dueDate={new Date().toLocaleDateString()}
      /> */}
      <AnnoucementPreview/>
      <CommunityDirectories />
      {/* <PostPreview/> */}
    </div>
  );
};

export default Dashboard;
