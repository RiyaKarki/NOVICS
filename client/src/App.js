import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ComicList from "./pages/ComicList";
import ComicDetail from "./pages/ComicDetail";
import Navbar from "./components/Navbar";


function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Welcome to Novics</h1>
      <p>Your comic site is starting!</p>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/comic/:id" element={<ComicDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
