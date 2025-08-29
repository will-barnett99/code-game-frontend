import { useState } from "react";
import HintButton from "./buttons/HintButton";
import ResetButton from "./buttons/ResetButton";
import RunButton from "./buttons/RunButton";

function ButtonsContainer({ handleRun, handleReset }) {
  const [hint, setHint] = useState("");

  return (
    <>
      <section>
        <HintButton setHint={setHint} />
        <RunButton handleRun={handleRun} />
        <ResetButton handleReset={handleReset} />
      </section>
      <p>{hint}</p>
    </>
  );
}

export default ButtonsContainer;
