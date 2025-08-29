function RunButton({ handleRun }) {
  return (
    <button
      onClick={handleRun}
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
    >
      Run
    </button>
  );
}

export default RunButton;
