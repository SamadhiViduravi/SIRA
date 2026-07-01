import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'GPA Calculator' },
    { to: '/programs', label: 'Programs' },
    { to: '/resources', label: 'Resources' },
    { to: '/articles', label: 'Articles Hub' },
  ];

  return (
    <nav className="bg-crimson text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side: Brand and Desktop Links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold hover:text-gray-200 transition">
              SIRA
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: GitHub Button & Mobile Hamburger Trigger */}
          <div className="flex items-center space-x-4">
            {/* GitHub Contribute Button - visible on all screens, scales down slightly on mobile */}
            <a
              href="https://github.com/SamadhiViduravi/SIRA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-white text-crimson px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-semibold hover:bg-gray-100 transition shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48v-1.674c-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852v2.747c0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>Contribute</span>
            </a>

            {/* Hamburger Toggle Button - Only visible on mobile/tablet */}
            <button
              onClick={toggleMenu}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-red-800 focus:outline-none transition duration-150"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  /* Close Icon 'X' when menu is open */
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  /* Hamburger Icon when menu is closed */
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dynamic Dropdown Drawer Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-red-950/95 shadow-inner border-t border-red-900">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // Auto-closes drawer menu layout upon route click
              className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-crimson transition duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}