import HintButton from "./buttons/HintButton";
import ResetButton from "./buttons/ResetButton";
import RunButton from "./buttons/RunButton";

function ButtonsContainer({ handleRun, handleReset, handleHint }) {
  return (
    <section>
      <HintButton handleHint={handleHint} />
      <RunButton handleRun={handleRun} />
      <ResetButton handleReset={handleReset} />
    </section>
  );
}

export default ButtonsContainer;
