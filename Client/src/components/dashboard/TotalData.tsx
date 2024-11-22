import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
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
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Número de Datos por Sección
      </h2>
      <ResponsiveContainer width="90%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 14 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4F46E5" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TotalData;
