import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const DemoUnderHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-emerald-50 to-teal-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-600 text-white flex items-center justify-center rounded-full font-bold text-xl shadow-lg transition-transform hover:scale-105">
              WW
            </div>
            <span className="font-bold text-xl sm:text-2xl text-gray-900 tracking-tight">
              We Want Waste
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
            >
              Contact
            </a>
            <span className="text-sm text-gray-500">Demo Redesign</span>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3 border-t border-emerald-100">
            <a
              href="#home"
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <span className="text-sm text-gray-500 py-2">Demo Redesign</span>
          </nav>
        )}
      </div>
    </header>
  );
};

export default DemoUnderHeader;