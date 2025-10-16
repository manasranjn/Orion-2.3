import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import EditPost from "./Components/EditPost";
import Footer from "./Components/Footer";
import BlogDetails from "./Components/BlogDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/edit-post/:id" element={<EditPost />}></Route>
        <Route path="/details/:id" element={<BlogDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
