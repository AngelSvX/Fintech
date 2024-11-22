import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

function OnlineResources() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOnlineEventsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getOnlineEvents");
        const { onlinePercentage } = response.data;

        setData([
          { name: "Eventos Online", value: onlinePercentage },
          { name: "Eventos Presenciales", value: 100 - onlinePercentage },
        ]);
      } catch (error) {
        console.error("Error al cargar los datos de eventos online:", error);
      }
    };

    fetchOnlineEventsData();
  }, []);

  const COLORS = ["#4F46E5", "#22C55E"];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Porcentaje de Eventos Online
      </h2>
      <ResponsiveContainer width="90%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#4F46E5"
            label={(entry) => `${entry.name}: ${entry.value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-lg mt-4">
        El <strong>{data.length > 0 ? data[0].value : 0}%</strong> de los eventos son online.
      </p>
    </div>
  );
}

export default OnlineResources;
