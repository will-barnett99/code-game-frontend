import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import KataProfile from "./KataProfile";
import Textbox from "./Textbox";
import ButtonsContainer from "./ButtonsContainer";

function Kata() {
  const [input, setInput] = useState(`function sum(a,b){
  // your code here
};`);

  return (
    <>
      <KataProfile />
      <Textbox />
      <CodeMirror
        value={input}
        height="300px"
        extensions={[javascript()]}
        onChange={(value) => setInput(value)}
      />
      <ButtonsContainer />
    </>
  );
}
export default Kata;
