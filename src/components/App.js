import React, { useState, useEffect, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Editor from "./Editor";
import SecondPage from "./SecondPage";
import { Routes, Route } from "react-router-dom";
import ThirdPage from "./ThirdPage";
import NewPage from "./NewPage";
export const NewContext = React.createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <NewContext.Provider value={{ count, setCount }}>
      <Routes>
        <Route path="/" element={<SecondPage />}></Route>
        {/* <Route path="/next" element={<ThirdPage />}></Route> */}
        <Route path="/next" element={<NewPage />}></Route>
      </Routes>
    </NewContext.Provider>
  );
}

export default App;
