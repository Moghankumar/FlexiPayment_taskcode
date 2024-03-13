import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NewContext } from "./App";
const NewPage = () => {
  const { count } = useContext(NewContext);

  return (
    <>
      <h5>In new page - {count}</h5>
      <Link to="/">Back</Link>
    </>
  );
};
export default NewPage;
