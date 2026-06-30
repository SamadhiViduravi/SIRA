import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-crimson text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold hover:text-gray-200 transition">
              SIRA
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-crimson-dark transition"
              >
                GPA Calculator
              </Link>
              <Link
                to="/resources"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-crimson-dark transition"
              >
                Resources
              </Link>
              <Link
                to="/articles"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-crimson-dark transition"
              >
                Articles Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
