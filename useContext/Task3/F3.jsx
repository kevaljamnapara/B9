import React, { useContext } from "react";
import { FormContext } from "./F1";

function F3() {
  const data = useContext(FormContext);

  const hS = () => {
    alert(
      `First Name: ${data.fname || ""}
Last Name: ${data.lname || ""}
Message: ${data.msg || ""}
City: ${data.city || ""}
Gender: ${data.gender || ""}`
    );
  };

  return (
    <button onClick={hS}>
      Submit
    </button>
  );
}

export default F3;