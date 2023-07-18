// AuthModal.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import Login from "./login";
import Signup from "./signup";

function AuthModal({ onClose }) {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <motion.div
        className="w-full max-w-lg bg-white rounded-lg overflow-hidden shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            {showLogin ? "Login" : "Sign up"}
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-offset-white focus:ring-offset-2 focus:ring-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {showLogin ? (
          <Login onToggle={handleToggle} />
        ) : (
          <Signup onToggle={handleToggle} />
        )}
      </motion.div>
    </div>
  );
}

export default AuthModal;
