import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Home from "./Screens/Home";
import Blogs from "./Screens/Blogs";
import Contact from "./Screens/Contact";
import Works from "./Screens/Works";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/works" element={<Works />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
