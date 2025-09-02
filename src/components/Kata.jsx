import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import KataProfile from "./KataProfile";
import Textbox from "./Textbox";
import ButtonsContainer from "./ButtonsContainer";
import getSingleKata from "../api/getKata";
import { useParams } from "react-router";

function Kata() {
  const { kata_id } = useParams();
  useEffect(() => {
    getSingleKata(kata_id).then((response) => {
      console.log(response);
    });
  }, []);
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
    <main className="w-[1024px] h-[560px] mx-auto mt-24 p-8 border-8 border-orange-500 bg-yellow-400 text-orange-700 [box-shadow:8px_8px_0_#000000]">
      <section className="flex gap-8">
        <section className="w-1/3">
          <KataProfile />
          <Textbox />
        </section>

        <section className="w-2/3 flex flex-col gap-4">
          <CodeMirror
            value={input}
            height="250px"
            extensions={[javascript()]}
            onChange={(value) => setInput(value)}
          />
          <ButtonsContainer
            handleRun={handleRun}
            handleReset={handleReset}
            handleHint={handleHint}
          />
          <pre className="mt-auto text-right text-xl font-bold">{output}</pre>
        </section>
      </section>
    </main>
  );
}
export default Kata;
