import React from "react";
import { useContext } from "react";
import { DodajText } from "../App";

const Komp2 = () => {
  const [text, setText] = useContext(DodajText);
  return (
    <div>
      <h1>Globalna varijabla</h1>
      <h3>Ime iz "text": {text}</h3>
      <button onClick={() => setText("Maja")}>Promijeni ime</button>
    </div>
  );
};

export default Komp2;
