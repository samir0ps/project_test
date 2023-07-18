// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validate and authenticate the user
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
          <label
            htmlFor="remember"
            className="ml-2 text-sm text-gray-700 cursor-pointer"
          >
            Remember me
          </label>
        </div>
        <Link to="/forgot" className="text-sm text-blue-500 hover:underline">
          Forgot password?
        </Link>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-600 focus:ring-offset-white focus:ring-offset-2"
      >
        Login
      </button>
      <p className="mt-4 text-center text-gray-700">
        Don't have an account?{" "}
        <button onClick={onToggle} className="text-blue-500 hover:underline">
          Sign up
        </button>
      </p>
    </form>
  );
}

export default Login;
