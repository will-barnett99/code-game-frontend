import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

function RelativeNotes({ note }) {
  return (
    <section>
      <p className="font-bold">Notes:</p>
      <a href={note} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="text-[20px]" icon={faHandPointRight} />{" "}
        Helpful Notes
      </a>
    </section>
  );
}

export default RelativeNotes;
