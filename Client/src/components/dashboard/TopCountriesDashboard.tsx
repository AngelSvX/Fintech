import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

function TopCountriesDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTopCountriesData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getCountriesData");
        setData(response.data);
      } catch (error) {
        console.error("Error al cargar los datos de países:", error);
      }
    };

    fetchTopCountriesData();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Países con Mayor Actividades para Mujeres en Fintech
      </h2>
      <ResponsiveContainer width="90%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalProjects" fill="#4F46E5" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopCountriesDashboard;
