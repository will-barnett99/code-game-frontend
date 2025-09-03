import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import KataTags from "./KataTags";

function KataCard({ katas }) {
  if (katas) {
    return (
      <>
        {katas.map((kata) => (
          <Link
            to={`/kata-gallery/${kata.kata_id}`}
            key={kata.kata_id}
            className="w-54 h-54 flex flex-col justify-between flex-shrink-0 p-2 border-8 border-orange-500 bg-yellow-400 text-orange-700 [box-shadow:8px_8px_0_#000000] font-bold transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105"
          >
            <header className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="text-2xl font-extrabold">{kata.title}</h4>
              <p className="text-xs">{kata.description}</p>
            </header>
            <ul className="flex justify-between text-xs">
              <KataTags kata_id={kata.kata_id} />
              <li className="">
                <FontAwesomeIcon icon={faDumbbell} className="rotate-45" />
                {kata.difficulty}
              </li>
            </ul>
          </Link>
        ))}
      </>
    );
  }
}

export default KataCard;
