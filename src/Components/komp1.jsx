import React from "react";
import { useContext } from "react";
import { DodajText, ProslijediText } from "../App";

const Komp1 = () => {
  const naziv = useContext(ProslijediText);
  const [text, setText] = useContext(DodajText);
  return (
    <div>
      <p>Kontekst ProslijediText: {naziv}</p>
      <p>Kontekst Dodaj: {text}</p>
    </div>
  );
};

export default Komp1;
