import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);

const trees = [
  { id: "1", type: "maple" },
  { id: "2", type: "maple" },
  { id: "3", type: "maple" },
  { id: "4", type: "maple" },
];

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById("root")
);
