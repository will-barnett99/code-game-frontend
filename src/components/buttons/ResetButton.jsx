function ResetButton({ initCode, setInput }) {
  return <button onClick={() => setInput(initCode)}>Reset</button>;
}

export default ResetButton;
