function HintButton({ handleHint }) {
  return (
    <button
      onClick={handleHint}
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
    >
      Hint
    </button>
  );
}

export default HintButton;
