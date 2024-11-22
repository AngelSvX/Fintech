import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

function FreeEventsDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFreeEventsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getFreeEvents");
        const { freeEventsPercentage } = response.data;

        setData([
          { name: "Eventos Gratuitos", value: freeEventsPercentage },
          { name: "Eventos Pagados", value: 100 - freeEventsPercentage },
        ]);
      } catch (error) {
        console.error("Error al cargar los datos de eventos sin costo:", error);
      }
    };

    fetchFreeEventsData();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Porcentaje de Eventos Gratuitos
      </h2>
      <ResponsiveContainer width="90%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" fill="#22C55E" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-lg mt-4">
        El <strong>{data.length > 0 ? data[0].value : 0}%</strong> de los eventos son gratuitos.
      </p>
    </div>
  );
}

export default FreeEventsDashboard;
