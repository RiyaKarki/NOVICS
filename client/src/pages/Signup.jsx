import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // For now, just log the signup data
    console.log("Signup", { email, password });
    alert("Signup submitted! (functionality coming soon)");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create a Novics Account</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Password</label>
        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        <label className="block mb-2 font-semibold">Confirm Password</label>
        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength={6}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
        >
          Signup
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 underline">
          Login here
        </Link>
      </p>
    </div>
  );
}
