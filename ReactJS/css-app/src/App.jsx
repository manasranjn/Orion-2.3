import React from "react";
import InlineCss from "./Components/InlineCss";
import StyleObject from "./Components/StyleObject";
import GlobalCss from "./Components/GlobalCss";
import "./style.css";
import Example from "./Components/Example";
import Product from "./Components/Product";

const App = () => {
  return (
    <div>
      {/* <InlineCss />
      <StyleObject />
      <GlobalCss />
      <Example /> */}

      <Product />
    </div>
  );
};

export default App;
