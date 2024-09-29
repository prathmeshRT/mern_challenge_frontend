import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = () => {
  const [statistics, setStatistics] = useState({});
  const [month, setMonth] = useState('03');

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await axios.get(`https://localhost:8080/api/products/statistics`, {
        params: { month }
      });
      setStatistics(response.data);
    };
    fetchStatistics();
  }, [month]);

  return (
    <div>
      <h1>Statistics</h1>
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
        <p>Total Sale Amount: {statistics.totalAmount}</p>
        <p>Total Sold Items: {statistics.soldItems}</p>
        <p>Total Not Sold Items: {statistics.notSoldItems}</p>
      </div>
    </div>
  );
};

export default Statistics;
