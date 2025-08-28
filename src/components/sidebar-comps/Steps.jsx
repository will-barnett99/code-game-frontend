function Steps() {
  const steps = [
    "Browse the list of katas on the right.",
    "Check the topic and difficulty of each kata.",
    "Read the description to see what the challenge is about.",
    "Start with beginner katas if you`re just warming up.",
    "Pick a kata that excites or challenges you!",
  ];

  return (
    <section className="mb-6">
      <h3 className="font-semibold text-lg mb-2">How to Choose a Kata</h3>
      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export default Steps;
