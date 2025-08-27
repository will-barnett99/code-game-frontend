import { Link } from "react-router";

function KataCard({ title, topic, difficulty, description }) {
  return (
    <section>
      <p>Kata Title: {title}</p>
      <p>Topic:{topic}</p>
      <p>Difficulty:{difficulty}</p>
      <p>Description: {description}</p>
      <Link to={`/kata`}>
        <button>try this kata</button>
      </Link>
    </section>
  );
}
export default KataCard;
