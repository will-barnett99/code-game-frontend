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
import getKataContent from "../api/getKataContent";

function Kata() {
  const [kata, setKata] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [pass, setPass] = useState(false);
  const [tags, setTags] = useState([]);
  const [hint, setHint] = useState("");
  const [note, setNote] = useState("");
  const { kata_id } = useParams();

  useEffect(() => {
    getSingleKata(kata_id).then(({ kata }) => {
      setKata(kata);
      setInput(kata.initial_code);
    });
    Promise.all([
      getKataContent(kata_id, "hint"),
      getKataContent(kata_id, "tags"),
      getKataContent(kata_id, "note"),
    ]).then(([hintResponse, tagsResponse, noteResponse]) => {
      if (hintResponse.hint) setHint(hintResponse.hint);
      if (tagsResponse.tags) setTags(tagsResponse.tags);
      if (noteResponse.note) setTags(noteResponse.note);
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
    console.log(hint);
    setOutput(hint);
  };

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
