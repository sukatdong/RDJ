import { useState } from 'react';

function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  // Mock data for demonstration
  const transactions = [
    { id: 1, type: 'car', amount: 500000, date: '2024-02-15', renter: 'John Doe' },
    { id: 2, type: 'motorcycle', amount: 150000, date: '2024-02-14', renter: 'Jane Smith' },
    { id: 3, type: 'hotel', amount: 750000, date: '2024-02-13', renter: 'Bob Johnson' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex flex-wrap gap-4">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="input-field"
          >
            <option value="all">All Units</option>
            <option value="car">Cars</option>
            <option value="motorcycle">Motorcycles</option>
            <option value="hotel">Hotels</option>
          </select>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="input-field"
          />
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="input-field"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900">Total Income</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">Rp 1.400.000</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900">Total Expenses</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">Rp 300.000</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900">Net Profit</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">Rp 1.100.000</p>
        </div>
      </div>

      <div className="card">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Renter</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b bg-white">
                  <td className="px-6 py-4">{transaction.type}</td>
                  <td className="px-6 py-4">Rp {transaction.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">{transaction.date}</td>
                  <td className="px-6 py-4">{transaction.renter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;