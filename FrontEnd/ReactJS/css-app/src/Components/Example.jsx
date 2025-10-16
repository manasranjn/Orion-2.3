import React from "react";
import cssData from "./example.module.css";

const Example = () => {
  return (
    <div>
      <div className={cssData.counter}>Counter CSS</div>
      <div className={cssData.container}> Container CSS</div>
    </div>
  );
};

export default Example;
