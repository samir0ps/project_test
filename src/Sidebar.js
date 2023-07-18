import React from "react";
import { FaTimes } from "react-icons/fa";

function Sidebar(props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 overflow-y-auto">
        <button
          onClick={props.onClose}
          className="text-gray-800 mr-4 hover:text-gray-600 transition-colors duration-300 ease-in-out"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
              Electronics
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
              Fashion
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
              Home & Garden
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
              Sports & Outdoors
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
              Books & Music
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
