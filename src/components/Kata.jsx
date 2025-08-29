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
  const [output, setOutput] = useState("");

  function assertEqual(actual, expected) {
    if (actual !== expected) {
      throw new Error(`Not quite right`);
    }
  }
  const handleRun = () => {
    try {
      const functionBody = `${input}${kata.tests.join(";\n")}`;
      const userFunction = new Function("assertEqual", functionBody);
      userFunction(assertEqual);
      setOutput("Well done");
    } catch (err) {
      setOutput(err.message);
    }
  };

  const handleReset = () => {
    setInput(kata.starterCode);
    setOutput("");
  };

  const handleHint = () => {
    setOutput("Try returning the sum of a and b");
  };
  return (
    <main>
      <section>
        <KataProfile />
        <Textbox />
      </section>

      <section>
        <CodeMirror
          value={input}
          height="300px"
          extensions={[javascript()]}
          onChange={(value) => setInput(value)}
        />
        <ButtonsContainer
          handleRun={handleRun}
          handleReset={handleReset}
          handleHint={handleHint}
        />
        <pre>{output}</pre>
      </section>
    </main>
  );
}
export default Kata;
