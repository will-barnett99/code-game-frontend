import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function Kata() {
  const [input, setInput] = useState("");

  return (
    <>
      <CodeMirror height="300px" extensions={[javascript()]} />
    </>
  );
}
export default Kata;
