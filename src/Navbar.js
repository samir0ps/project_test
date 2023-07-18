import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
    setIsCartOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">
                E-commerce
              </span>
            </Link>
          </div>

          {/* Search */}
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                className={`block w-full bg-white border border-gray-400 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  isSearchOpen ? "focus:border-blue-500" : ""
                }`}
                type="text"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                {isSearchOpen ? (
                  <button
                    type="button"
                    onClick={toggleSearch}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={toggleSearch}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <FaSearch className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Links */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Shop
            </Link>
            <button
              type="button"
              onClick={toggleCart}
              className="relative z-10 inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaShoppingCart className="mr-2 h-5 w-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                3 {/* Replace with actual number of items in cart */}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Shop
            </Link>
          </div>
        </div>
      )}

      {/* Cart list */}
      {isCartOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg px-4 py-3">
          {/* Replace with actual cart items */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-800">Shopping Cart</h3>
            <button
              type="button"
              onClick={toggleCart}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-base font-medium text-gray-800">
                  Product 1
                </h4>
                <p className="text-sm text-gray-500">Quantity: 1</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <p className="text-base font-medium text-gray-800">$10.00</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-base font-medium text-gray-800">
                  Product 2
                </h4>
                <p className="text-sm text-gray-500">Quantity: 2</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <p className="text-base font-medium text-gray-800">$20.00</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-base font-medium text-gray-800">
                  Product 3
                </h4>
                <p className="text-sm text-gray-500">Quantity: 1</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <p className="text-base font-medium text-gray-800">$5.00</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-base font-medium text-gray-800">Total:</p>
            <p className="text-base font-medium text-gray-800">$35.00</p>
          </div>
          <div className="mt-4">
            <Link
              to="/cart"
              className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
