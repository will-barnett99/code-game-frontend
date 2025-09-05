import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import KataProfile from "./KataProfile";
import Textbox from "./Textbox";
import ButtonsContainer from "./ButtonsContainer";
import { useParams } from "react-router";
import NextKata from "./buttons/NextKata";
import useKata from "../hooks/useKata";
import useSubmission from "../hooks/useSubmission";

function Kata() {
  const { kata_id } = useParams();
  const { kata, tags, hint, note, loading, error } = useKata(kata_id);
  const [input, setInput] = useState("");
  const { output, pass, runSubmission, reset, setOutput } = useSubmission();

  useEffect(() => {
    if (kata?.initial_code) {
      setInput(kata.initial_code);
    }
  }, [kata]);

  const handleRun = () => runSubmission({ kata_id, user_code: input });
  const handleReset = () => setInput(reset(kata.initial_code));
  const handleHint = () => setOutput(hint);

  if (loading) {
    return (
      <main className="flex items-center justify-center h-[560px]">
        <p className="text-lg font-bold text-orange-700">Loading kata…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex items-center justify-center h-[560px]">
        <p className="text-lg font-bold text-red-600">{error}</p>
      </main>
    );
  }

  return (
    <main
      className="w-100% lg:h-[560px] max-w-[1024px] flex flex-col lg:flex-row mx-4 mt-8 lg:mt-24 p-4 gap-4 lg:gap-8 lg:mx-auto
                 border-8 border-orange-500 bg-yellow-400 text-orange-700 [box-shadow:8px_8px_0_#000000]"
    >
      <section className="lg:w-1/3 ">
        <KataProfile />
        <Textbox
          title={kata.title}
          description={kata.description}
          kata_id={kata_id}
          tags={tags}
          note={note}
        />
      </section>
      <section className="lg:w-2/3 flex flex-col gap-2 lg:gap-4">
        <CodeMirror
          value={input}
          width="100%"
          height="250px"
          extensions={[javascript()]}
          onChange={(value) => setInput(value)}
        />
        <ButtonsContainer
          handleRun={handleRun}
          handleReset={handleReset}
          handleHint={handleHint}
        />
        <p className="lg:mt-auto text-center lg:text-right lg:font-bold">
          {output}
        </p>
        {pass ? <NextKata kata_id={kata_id} /> : null}
      </section>
    </main>
  );
}

export default Kata;
