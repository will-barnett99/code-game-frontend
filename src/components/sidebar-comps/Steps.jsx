function Steps() {
  const steps = [
    "Browse the list of katas on the right.",
    "Check the topic and difficulty of each kata.",
    "Read the description to see what the challenge is about.",
    "Start with beginner katas if you`re just warming up.",
    "Pick a kata that excites or challenges you!",
  ];

  return (
    <section>
      <h3>How to Choose a Kata</h3>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export default Steps;
