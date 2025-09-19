import React, { createContext } from "react";
import AllStudents from "./Components/AllStudents";

export const example = createContext();

const App = () => {
  return (
    <div>
      <example.Provider value={"Rahul"}>
        <AllStudents />
      </example.Provider>
    </div>
  );
};

export default App;
