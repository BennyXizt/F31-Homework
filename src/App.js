import { createContext, useContext, useEffect, useState } from "react";
import "./css/App.css";
import List from "./components/List/List";
import { Route, Routes } from "react-router-dom";

const DataContext = createContext()

function App() {
  

  return (
    <DataContext.Provider value={{ contextValue: "contextValue" }}>
    <Routes>
      <Route path="*" element={<List />} />
    </Routes>
  </DataContext.Provider>

  );
}

export default App;
