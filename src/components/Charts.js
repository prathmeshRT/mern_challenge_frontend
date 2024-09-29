import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Charts = () => {
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [month, setMonth] = useState('03');

  useEffect(() => {
    const fetchBarData = async () => {
      const response = await axios.get(`https://localhost:8080/api/products/bar-chart`, {
        params: { month }
      });
      setBarData(response.data);
    };
    const fetchPieData = async () => {
      const response = await axios.get(`https://localhost:8080/api/products/pie-chart`, {
        params: { month }
      });
      setPieData(response.data);
    };
    fetchBarData();
    fetchPieData();
  }, [month]);

  return (
    <div>
      <h1>Charts</h1>
      <select value={month} onChange={e => setMonth(e.target.value)}>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <div>
        <h2>Bar Chart</h2>
        <BarChart width={600} height={300} data={barData}>
          <XAxis dataKey="range" />
          <YAxis />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
        <h2>Pie Chart</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            dataKey="count"
            nameKey="_id"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Charts;
