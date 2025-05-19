import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Novics</Link>
      <div className="space-x-4">
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
      </div>
    </nav>
  );
}
