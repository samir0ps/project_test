import React, { useState, useMemo, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import AuthModal from "./AuthModal";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Fuse from "fuse.js";
import { products } from "./App";
import Sidebar from "./Sidebar";

function Navbar({ toggleCart, cartCount }) {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const fuse = useMemo(() => {
    if (products) {
      return new Fuse(products, {
        keys: ["title", "description"],
        threshold: 0.3,
      });
    }
    return null;
  }, [products]);

  useEffect(() => {
    if (searchTerm && fuse) {
      setSearchResults(fuse.search(searchTerm));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, fuse]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearchClick = (id) => {
    navigate(`/products/${id}`);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex flex-row">
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="logo"
            className="w-8 h-8 mr-2"
          />
          <h1 className="text-xl font-semibold text-gray-800">E-Shop</h1>
        </Link>
        <button onClick={handleToggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        {location.pathname === "/" && (
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
              >
                <FaSearch className="inline-block mr-2 -mt-1" />
                Search
              </button>
              {searchResults.length > 0 && (
                <ul className="absolute left-0 right-0 bg-white shadow-md border border-gray-200 mt-2 rounded-lg max-h-64 overflow-y-auto z-20">
                  {searchResults.map((result) => (
                    <li
                      key={result?.item?.id}
                      onClick={() => handleSearchClick(result?.item?.id)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                    >
                      {result?.item?.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
          </div>
        )}
      </div>
      {showModal && <AuthModal onClose={handleCloseModal} />}
      {isSidebarOpen && <Sidebar onClose={handleToggleSidebar} />}
    </nav>
  );
}
export default Navbar;
