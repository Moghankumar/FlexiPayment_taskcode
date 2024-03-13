import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { NewContext } from "./App";

const SecondPage = () => {
  const { count, setCount } = useContext(NewContext);
  const handleIncrementChange = () => {
    // setIncrementCount((val) => val + 1);
    setCount((count) => count + 1);
  };
  return (
    <>
      <h4 style={{ color: count % 2 == 0 ? "red" : "blue" }}>
        Increment count-{count}
      </h4>
      <button onClick={handleIncrementChange}>Increment</button>{" "}
      <Link to="/next">Next</Link>
    </>
  );
};
export default SecondPage;
