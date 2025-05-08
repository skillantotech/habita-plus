"use client";

import { useSelector } from "react-redux";
import { userGroupNoticeService } from "@/services/UserGroupService"; 

const UserGroupHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const societyId = useSelector((state) => state.auth.user?.Customer?.customerId);
  // console.log("societyId", societyId);

  const getUserGroupHandler = async () => {
    try {
      const res = await userGroupNoticeService({ societyId }, token);
      return res;
    } catch (err) {
      console.error("Failed to fetch user groups:", err);
    }
  };

  return {
    getUserGroupHandler,
  };
};

export default UserGroupHandler;

