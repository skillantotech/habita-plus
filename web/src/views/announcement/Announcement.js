import { useEffect, useState, useCallback } from "react"; 
import { useSelector } from "react-redux";
import AnnoucementHandler from "@/handlers/AnnoucementHandler";

const Announcement = () => {
  const { getAnnoucementsByBranchIdHandler } = AnnoucementHandler();
  const user = useSelector((state) => state.auth.user);

  const [announcements, setAnnouncements] = useState([]);
  const [expanded, setExpanded] = useState(false);

  console.log("Announcement", announcements);

  // ✅ Memoize the function using useCallback
  const fetchAnnouncements = useCallback(() => {
    if (user) {
      getAnnoucementsByBranchIdHandler()
        .then((res) => {
          setAnnouncements(res.data.data);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, [user, getAnnoucementsByBranchIdHandler]);

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]); // ✅ Add the memoized function as a dependency

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="mb-3 font-sans text-lg font-semibold">Announcement</div>
      <div className="grid grid-cols-1 space-x-4 md:grid-cols-2">
        {announcements.map((item, index) => (
          <div 
            key={item.id || index} // ✅ Added unique key
            className="w-full flex flex-col space-y-3 p-[19px] bg-white-900 shadow-sm shadow-gray-200 border border-gray-300 rounded-lg"
          >
            <div className="font-base text-[25px]">{item.notice_title}</div>
            <div>{item.notice_description}</div>
          </div>
        ))}
        <div>Adds dksa sdakm sdmkas</div>
      </div>
    </div>
  );
};

export default Announcement;
