import React from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt,FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar({ onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here...
    navigate("/login");
  };

  return (
    <div className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-20">
      <button onClick={onClose}>
        <FaTimes />
      </button>
      <ul className="py-4">
        <li className="flex items-center py-2 px-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
          <FaHome className="mr-2" />
          <span>Home</span>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
          <FaUser className="mr-2" />
          <span>Profile</span>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
          <FaCog className="mr-2" />
          <span>Settings</span>
        </li>
        <li
          onClick={handleLogout}
          className="flex items-center py-2 px-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out cursor-pointer"
        >
          <FaSignOutAlt className="mr-2" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
