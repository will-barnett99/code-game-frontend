function RunButton({ handleRun }) {
  return (
    <button
      onClick={handleRun}
      class="w-20 ml-auto bg-orange-500 text-white hover:bg-orange-600 hover:[box-shadow:4px_4px_0_#000000] cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:-translate-x-0.5"
    >
      Run
    </button>
  );
}

export default RunButton;
