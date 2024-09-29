import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState('03');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get(`https://localhost:8080/api/products/transactions`, {
        params: { month, search, page }
      });
      setTransactions(response.data);
    };
    fetchTransactions();
  }, [month, search, page]);

  return (
    <div>
      <h1>Transactions</h1>
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
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search transactions"
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
            <th>Category</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Transactions;
