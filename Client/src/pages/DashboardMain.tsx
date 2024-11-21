import React, { useEffect, useState } from "react";
import axios from "axios";
import TotalData from "../components/dashboard/TotalData";
import Sidebar from "../layout/Sidebar";

function DashboardMain() {

  return (
    <div className="w-full h-auto flex">
      <Sidebar/>
      <TotalData/>
    </div>
  );
};

export default DashboardMain;
