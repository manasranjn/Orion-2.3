import React from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="grid grid-cols-12">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/orders" element={<div>Orders Page</div>}></Route>
          <Route path="/menu" element={<div>Menu Page</div>}></Route>
          <Route path="/reviews" element={<div>Reviews Page</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
