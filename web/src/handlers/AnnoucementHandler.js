import { getAnnoucementsByBranchIdService } from "@/services/annoucementServices";
import { useSelector } from "react-redux";

const AnnoucementHandler = () => {
  const user = useSelector((state) => state.auth.user);

  const getAnnoucementsByBranchIdHandler = async (page = 1, limit = 10) => {
    try {
      const result = await getAnnoucementsByBranchIdService({
        branchId: user.branch_id,
        page,
        limit,
      });
      if (result) {
        return result;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {
    getAnnoucementsByBranchIdHandler,
  };
};

export default AnnoucementHandler;
