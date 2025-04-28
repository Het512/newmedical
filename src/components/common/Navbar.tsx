import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-800 font-bold text-xl">New Medical Corporation</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/catalog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Medicines</Link>
            {isAuthenticated && currentUser?.role !== 'customer' && (
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Dashboard</Link>
            )}
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 text-sm">{currentUser?.name}</span>
                <button onClick={logout} className="flex items-center text-gray-700 hover:text-red-600">
                  <LogOut size={18} className="mr-1" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center text-gray-700 hover:text-blue-600">
                <User size={18} className="mr-1" />
                <span>Login</span>
              </Link>
            )}
            
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 mr-4">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md">Home</Link>
            <Link to="/catalog" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md">Medicines</Link>
            {isAuthenticated && currentUser?.role !== 'customer' && (
              <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md">Dashboard</Link>
            )}
            
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 text-gray-700">{currentUser?.name}</div>
                <button 
                  onClick={logout}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md flex items-center"
                >
                  <LogOut size={18} className="mr-1" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md flex items-center">
                <User size={18} className="mr-1" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;