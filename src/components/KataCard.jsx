import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faDumbbell,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
function KataCard({ katas }) {
  return (
    <>
      {katas.map((kata) => (
        <section
          key={kata.id}
          className="flex flex-col gap-2 border border-gray-300 rounded-xl p-2 mb-4 bg-gray-50"
        >
          <header className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-semibold">{kata.title}</h4>
            <ul className="flex gap-4">
              <li className="text-yellow-700">
                <FontAwesomeIcon icon={faBolt} /> {kata.topic}
              </li>
              <li className="text-green-700">
                <FontAwesomeIcon icon={faDumbbell} className="rotate-45" />{" "}
                {kata.difficulty}
              </li>
            </ul>
          </header>
          <p>{kata.description}</p>
          <Link to={`/kata`} className="ml-auto mt-8">
            <button className="border border-gray-300 px-4 py-2 rounded cursor-pointer">
              try this kata <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </section>
      ))}
    </>
  );
}

export default KataCard;
