import { useCallback, useEffect, useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import ViewAllButton from "@/components/shared/ViewAllButton";
import AnnoucementHandler from "@/handlers/AnnoucementHandler";

const Card = ({ data }) => {
  return (
    <div className="max-w-[280px] w-[280px] h-[200px] p-4 rounded-3xl bg-gradient-to-r from-indigo-100 to-blue-200 cursor-pointer border-2 border-gray-200 hover:border-indigo-200 transition-all duration-500">
      <div className="flex flex-col gap-1 overflow-hidden text-gray-900">
        <div className="w-full">
          <h5 className="font-semibold text-md ">{data.notice_title}</h5>
        </div>
        <div className="w-full">
          <p className="max-w-full text-sm font-normal text-gray-600 line-clamp-4">
            {data.notice_description}
          </p>
        </div>
        <div className="flex items-center justify-end gap-3 mt-1 text-xs">
          <p className="text-gray-600">{data.time}</p>
        </div>
      </div>
    </div>
  );
};

const AnnoucementPreview = () => {
  const { getAnnoucementsByBranchIdHandler } = AnnoucementHandler();
  const [announcements, setAnnouncements] = useState([]);

  // ✅ Use useCallback to memoize the function
  const fetchAnnouncements = useCallback(() => {
    getAnnoucementsByBranchIdHandler()
      .then((res) => {
        setAnnouncements(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [getAnnoucementsByBranchIdHandler]);

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]); // ✅ Add memoized function as a dependency

  return (
    <div className="w-full space-y-5">
      <SectionHeading size="md" className={"flex gap-3 items-center"}>
        Announcements
      </SectionHeading>
      <div className="">
        <div className="flex gap-5 h-[200px] max-w-full overflow-auto no-scrollbar">
          {announcements.map((el, index) => (
            <Card key={index} data={el} />
          ))}
        </div>
      </div>
      <ViewAllButton />
    </div>
  );
};

export default AnnoucementPreview;
