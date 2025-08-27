function KataCard({ title, topic, difficulty, description }) {
  return (
    <section>
      <p>Kata Title: {title}</p>
      <p>Topic:{topic}</p>
      <p>Difficulty:{difficulty}</p>
      <p>Description: {description}</p>
    </section>
  );
}
export default KataCard;
