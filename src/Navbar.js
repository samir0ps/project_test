import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import AuthModal from "./AuthModal";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Fuse from "fuse.js";
import { products } from "./App";
import Input from "./Input"; // added this line
import Sidebar from "./Sidebar";
function Navbar({ toggleCart, cartCount, products , props }) {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // added this line
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => { // added this function
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center flex-1">
          <Link to="/" className="flex items-center">
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="logo"
              className="w-8 h-8 mr-2"
            />
            <h1 className="text-xl font-semibold text-gray-800">E-Shop</h1>
          </Link>
        </div>
        {location.pathname === "/" && (
          <div className="flex items-center">
            <Input // added this element
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleInputChange}
              className="mr-4 flex items-center pl-3 pr-10 border border-gray-300 rounded py-2" // added border and rounded classes
            >
              <FaSearch className="absolute right-0 top-0 mr-5 mt-3 text-gray-500" />
            </Input>
            <button
              onClick={handleOpenModal}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-4 hover:bg-gray-300 transition-colors duration-300 ease-in-out"
            >
              Login / Signup
            </button>
            <button
              onClick={toggleCart}
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
              <FaShoppingCart className="mr-1" />
              Cart ({cartCount})
            </button>
            <button
  onClick={props.onToggleSidebar} // changed to props
  className="text-gray-800 mr-4 hover:text-gray-600 transition-colors duration-300 ease-in-out"
>
  <FaBars className="w-6 h-6" />
</button>

          </div>
          
        )}

      </div>
      {showModal && <AuthModal onClose={handleCloseModal} />}
    </nav>
  );
}

export default Navbar;
