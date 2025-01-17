import { useState } from 'react';

function ExpenseForm() {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: '',
    unitType: '',
    unitName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Expense form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Record Expense</h1>
      
      <form onSubmit={handleSubmit} className="card space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input-field"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Amount (Rp)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Related Unit Type (Optional)</label>
          <select
            name="unitType"
            value={formData.unitType}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select unit type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="hotel">Hotel</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Unit Name/Number (Optional)</label>
          <input
            type="text"
            name="unitName"
            value={formData.unitName}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Record Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;