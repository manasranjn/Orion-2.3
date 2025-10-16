import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ClassBase from "./Components/ClassBase";
import FunctionBase from "./Components/FunctionBase";

const App = () => {
  return (
    <div>
      <Navbar />
      <ClassBase />
      <FunctionBase />
      <h1>Hello</h1>
      <div>
        <p>This is a paragraph</p>
      </div>

      <p>This is a paragraph</p>
      <Footer></Footer>
    </div>
  );
};

export default App;
