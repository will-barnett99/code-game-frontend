import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import KataProfile from "./KataProfile";
import Textbox from "./Textbox";
import ButtonsContainer from "./ButtonsContainer";

function Kata() {
  const initCode = `function sum(a,b){
  // your code here
};`;
  const [input, setInput] = useState(initCode);

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
      <ButtonsContainer initCode={initCode} setInput={setInput} />
    </>
  );
}
export default Kata;
