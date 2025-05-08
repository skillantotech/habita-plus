

import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardHeader from "@/views/dashboard/DashboardHeader";
import DashboardLeftContents from "@/views/dashboard/DashboardLeftContents";
import AddDocument from "@/views/documents/AddDocument";
import DocumentList from "@/views/documents/DocumentList";

const Documents = () => {
  return (
    <DashboardLayout
      header={<DashboardHeader />}
      leftContent={<DashboardLeftContents />}
      rightContent={
        <>
          <AddDocument />
          <DocumentList />
        </>
      }
    />
  );
};

export default Documents;
