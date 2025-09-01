import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function KataProfile() {
  return (
    <header className="flex items-center justify-between mb-6 p-4 bg-orange-600 text-white [box-shadow:8px_8px_0_#000000]">
      <figure className="flex items-center mr-4">
        <FontAwesomeIcon icon={faUser} className="text-4xl" />
        <figcaption className="flex flex-col ml-3">
          <p className="font-semibold">Name</p>
          <p className="text-sm">Level: Expert</p>
        </figcaption>
      </figure>
      <span className="text-sm">#124</span>
    </header>
  );
}

export default KataProfile;
