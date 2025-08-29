function ResetButton({ handleReset }) {
  return (
    <button
      onClick={handleReset}
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
    >
      Reset
    </button>
  );
}

export default ResetButton;
