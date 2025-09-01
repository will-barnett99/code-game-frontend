import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function RelativeNotes() {
  return (
    <section>
      <h3 className="text-2xl font-bold mt-6">Notes</h3>
      <p>You may find notes on functions and operators useful here:</p>
      <ul>
        <li class="font-bold p-2">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">
            <FontAwesomeIcon className="text-[20px]" icon={faHandPointRight} />{" "}
            Notes on Functions
          </a>
        </li>
        <li class="font-bold p-2">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators">
            <FontAwesomeIcon className="text-[20px]" icon={faHandPointRight} />{" "}
            Notes on Operators
          </a>
        </li>
      </ul>
    </section>
  );
}

export default RelativeNotes;
