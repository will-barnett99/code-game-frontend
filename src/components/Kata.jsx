import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import KataProfile from "./KataProfile";
import Textbox from "./Textbox";
import ButtonsContainer from "./ButtonsContainer";

function Kata() {
  const kata = {
    id: "sum-two-numbers",
    title: "Sum Two Numbers",
    prompt: "Write a function sum(a,b) that returns a+b.",
    starterCode: `function sum(a,b){
  // your code here
};`,
    tests: ["assertEqual(sum(1,2), 3)", "assertEqual(sum(-1,5), 4)"],
  };
  const [input, setInput] = useState(kata.starterCode);

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
      <ButtonsContainer initCode={kata.starterCode} setInput={setInput} />
    </>
  );
}
export default Kata;
