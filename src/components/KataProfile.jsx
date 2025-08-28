import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function KataProfile() {
  return (
    <header className="flex items-center justify-between mb-6">
      <figure className="flex items-center mr-4">
        <FontAwesomeIcon icon={faUser} className="text-gray-400 text-5xl" />
        <figcaption className="flex flex-col ml-3">
          <p className="font-semibold">Name</p>
          <p className="text-sm text-gray-500">Level: Expert</p>
        </figcaption>
      </figure>
      <span className="text-sm text-gray-500">#124</span>
    </header>
  );
}

export default KataProfile;
