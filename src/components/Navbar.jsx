import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-7">
            <a href="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">Logo</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/" className="py-2 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Home</Link>
            <Link to="gfe" className="py-2 px-2 text-gray-500 hover:text-blue-500 transition duration-300">About</Link>
            <a href="#" className="py-2 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Services</a>
          </div>

          {/* Auth Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/login" 
              className="py-2 px-4 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register" 
              className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg 
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-500 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md">Home</a>
            <a href="#" className="text-gray-500 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md">About</a>
            <a href="#" className="text-gray-500 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md">Services</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-2">
              <a 
                href="/login" 
                className="block w-full text-center py-2 px-4 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Login
              </a>
              <a 
                href="/register" 
                className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;