import { useState } from "react";
import HintButton from "./buttons/HintButton";
import ResetButton from "./buttons/ResetButton";
import RunButton from "./buttons/RunButton";

function ButtonsContainer() {
  const [hint, setHint] = useState("");

  return (
    <>
      <section>
        <HintButton setHint={setHint} />
        <RunButton />
        <ResetButton />
      </section>
      <p>{hint}</p>
    </>
  );
}

export default ButtonsContainer;
