import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import KataProfile from "./KataProfile";
import Textbox from "./Textbox";
import ButtonsContainer from "./ButtonsContainer";
import getSingleKata from "../api/getKata";
import { useParams } from "react-router";
import postSubmission from "../api/postSubmission";
import NextKata from "./buttons/NextKata";

function Kata() {
  const [kata, setKata] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [pass, setPass] = useState(false);
  const { kata_id } = useParams();

  useEffect(() => {
    getSingleKata(kata_id).then(({ kata }) => {
      setKata(kata);
      setInput(kata.initial_code);
    });
  }, [kata_id]);

  const handleRun = () => {
    const userData = {
      kata_id: kata.kata_id,
      user_code: input,
    };
    postSubmission(userData)
      .then(({ result }) => {
        if (result === "PASS") {
          setOutput("Well done");
          setPass(true);
        } else {
          setOutput("Not quite right");
        }
      })
      .catch((error) => {
        console.error("Submission failed:", error);
      });
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
      <section className="flex gap-8 h-[100%]">
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
          {pass ? <NextKata kata_id={kata_id} /> : null}
        </section>
      </section>
    </main>
  );
}

export default Kata;
