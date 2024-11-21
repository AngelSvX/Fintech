import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import axios from "axios";

function TotalData() {

  const [dashboardData, setDashboardData] = useState({
    totalTrainings: 0,
    totalPosts: 0,
    totalProjects: 0,
    totalEvents: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getDashboardData");
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error al cargar los datos del dashboard:", error);
      }
    };
    fetchData();
  }, []);

  const data = [
    { name: "Capacitaciones", value: dashboardData.totalTrainings },
    { name: "Publicaciones", value: dashboardData.totalPosts },
    { name: "Proyectos", value: dashboardData.totalProjects },
    { name: "Eventos", value: dashboardData.totalEvents },
  ];


  return (
    <div className="w-full h-auto flex justify-center items-center p-6">
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default TotalData