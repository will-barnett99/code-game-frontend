import { useState } from "react";
import HintButton from "./buttons/HintButton";
import ResetButton from "./buttons/ResetButton";
import RunButton from "./buttons/RunButton";

function ButtonsContainer() {
  const [output, setOutput] = useState("");
  return (
    <>
      <section>
        <HintButton />
        <RunButton />
        <ResetButton />
      </section>
      <p>{output}</p>
    </>
  );
}

export default ButtonsContainer;
