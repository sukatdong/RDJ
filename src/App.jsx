import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import RentalForm from './components/RentalForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-xl font-bold text-blue-600">Rental Management</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-4">
                <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
                <Link to="/income" className="px-3 py-2 text-gray-700 hover:text-blue-600">Income</Link>
                <Link to="/expense" className="px-3 py-2 text-gray-700 hover:text-blue-600">Expense</Link>
                <Link to="/rental" className="px-3 py-2 text-gray-700 hover:text-blue-600">New Rental</Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">Dashboard</Link>
                <Link to="/income" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">Income</Link>
                <Link to="/expense" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">Expense</Link>
                <Link to="/rental" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">New Rental</Link>
              </div>
            </div>
          )}
        </nav>

        <main className="mx-auto max-w-7xl px-4 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<IncomeForm />} />
            <Route path="/expense" element={<ExpenseForm />} />
            <Route path="/rental" element={<RentalForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;