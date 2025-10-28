import React, { createContext } from "react";
import AllStudents from "./Components/AllStudents";
import TodoApp from "./Components/TodoApp";

export const example = createContext();

const App = () => {
  return (
    <div>
      {/* <example.Provider value={"Rahul"}>
        <AllStudents />
      </example.Provider> */}

      <TodoApp />
    </div>
  );
};

export default App;
