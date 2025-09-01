import HintButton from "./buttons/HintButton";
import ResetButton from "./buttons/ResetButton";
import RunButton from "./buttons/RunButton";

function ButtonsContainer({ handleRun, handleReset, handleHint }) {
  return (
    <section className="h-10 flex flex-row gap-2">
      <HintButton handleHint={handleHint} />
      <RunButton handleRun={handleRun} />
      <ResetButton handleReset={handleReset} />
    </section>
  );
}

export default ButtonsContainer;
