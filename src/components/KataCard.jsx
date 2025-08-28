import { Link } from "react-router";

function KataCard({ katas }) {
  return (
    <>
      {katas.map((kata) => (
        <section key={kata.id}>
          <p>Kata Title: {kata.title}</p>
          <p>Topic: {kata.topic}</p>
          <p>Difficulty: {kata.difficulty}</p>
          <p>Description: {kata.description}</p>
          <Link to={`/kata`}>
            <button>try this kata</button>
          </Link>
        </section>
      ))}
    </>
  );
}

export default KataCard;
