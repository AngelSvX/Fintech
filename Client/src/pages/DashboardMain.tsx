import React from "react";
import TotalData from "../components/dashboard/TotalData";
import Sidebar from "../layout/Sidebar";
import OnlineResources from "../components/dashboard/OnlineResources";
import FreeEventsDashboard from "../components/dashboard/FreeEventsDashboard";
import TopCountriesDashboard from "../components/dashboard/TopCountriesDashboard";

function DashboardMain() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div
        className={`flex-1 p-4 lg:p-8 space-y-8 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <TotalData />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OnlineResources />
          <FreeEventsDashboard />
        </div>
        <TopCountriesDashboard />
      </div>
    </div>
  );
}

export default DashboardMain;