import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { userRoutes } from "./routes/AllRoutes.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {userRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
