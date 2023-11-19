import { createContext, useState } from "react";
import "./App.css";
import { useContext } from "react";
import Komp1 from "./Components/komp1";
import Komp2 from "./Components/komp2";

export const ProslijediText = createContext("Ivo");
export const DodajText = createContext();
function App() {
  const ime = useContext(ProslijediText);
  const [text, setText] = useState("Marko");
  return (
    <div className="App">
      <ProslijediText.Provider value={ime}>
        <DodajText.Provider value={[text, setText]}>
          <Komp1 />
          <hr />
          <Komp2 />
        </DodajText.Provider>
      </ProslijediText.Provider>
    </div>
  );
}

export default App;
