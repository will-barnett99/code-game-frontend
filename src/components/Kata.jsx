import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import KataProfile from "./KataProfile";
import Textbox from "./Textbox";
import ButtonsContainer from "./ButtonsContainer";
import getSingleKata from "../api/getKata";
import { useParams } from "react-router";

function Kata() {
  const [kata, setKata] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { kata_id } = useParams();

  useEffect(() => {
    getSingleKata(kata_id).then(({ kata }) => {
      console.log(kata);
      setKata(kata);
      setInput(kata.initial_code);
    });
  }, []);
  const handleRun = () => {
    if (input === kata.solution_code) {
      setOutput("Well done");
    } else {
      setOutput("Not quite right");
    }
  };

  const handleReset = () => {
    setInput(kata.initial_code);
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
          <Textbox title={kata.title} description={kata.description} />
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
