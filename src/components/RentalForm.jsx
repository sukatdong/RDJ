import { useState } from 'react';

function RentalForm() {
  const [formData, setFormData] = useState({
    unitType: '',
    unitName: '',
    renterName: '',
    duration: '',
    price: '',
    paymentMethod: '',
    startDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rental form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">New Rental</h1>
      
      <form onSubmit={handleSubmit} className="card space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Unit Type</label>
          <select
            name="unitType"
            value={formData.unitType}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Select unit type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="hotel">Hotel</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Unit Name/Number</label>
          <input
            type="text"
            name="unitName"
            value={formData.unitName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Renter Name</label>
          <input
            type="text"
            name="renterName"
            value={formData.renterName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Duration (days)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Price (Rp)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Select payment method</option>
            <option value="cash">Cash</option>
            <option value="transfer">Bank Transfer</option>
            <option value="ewallet">E-Wallet</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Create Rental
        </button>
      </form>
    </div>
  );
}

export default RentalForm;