import React from "react";
import Caterogory from "./Components/Caterogory";
import img1 from "./assets/907288.jpg";
import img2 from "./assets/1341419.png";
import img3 from "./assets/1347629.jpeg";
import img4 from "./assets/1348291.jpeg";
import Details from "./Components/Details";
import "./style.css";

const App = () => {
  return (
    <div>
      <Caterogory name="Electronics" image={img1} />
      <Caterogory name="Home Appliances" image={img2} />
      <Caterogory name="Fashion" image={img3} />
      <Caterogory name="Furniture" image={img4} />

      <Details name="ABCD" age={10} add="XYZ" />
    </div>
  );
};

export default App;
