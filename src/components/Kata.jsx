import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function Kata() {
  const [input, setInput] = useState(`function sum(a,b){
  // your code here
};`);

  return (
    <>
      <CodeMirror
        value={input}
        height="300px"
        extensions={[javascript()]}
        onChange={(value) => setInput(value)}
      />
    </>
  );
}
export default Kata;
