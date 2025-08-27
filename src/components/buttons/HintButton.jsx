function HintButton({ setHint }) {
  function getHint() {
    setHint("Try returning the sum of a and b");
  }
  return <button onClick={() => getHint()}>Hint</button>;
}

export default HintButton;
