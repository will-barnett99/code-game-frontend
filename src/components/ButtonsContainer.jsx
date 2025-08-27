import { useState } from "react";
import HintButton from "./buttons/HintButton";
import ResetButton from "./buttons/ResetButton";
import RunButton from "./buttons/RunButton";

function ButtonsContainer({ initCode, setInput }) {
  const [hint, setHint] = useState("");

  return (
    <>
      <section>
        <HintButton setHint={setHint} />
        <RunButton />
        <ResetButton initCode={initCode} setInput={setInput} />
      </section>
      <p>{hint}</p>
    </>
  );
}

export default ButtonsContainer;
