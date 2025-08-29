import { Link } from "react-router";

function Onboarding() {
  return (
    <>
      <p>
        Want to test your coding knowledge? whether a complete beginner, an
        expert or somewhere in between - traverse the world of KataQuest by
        completing katas!
      </p>
      <Link to={`/kata-gallery`}>
        <button>Start</button>
      </Link>
    </>
  );
}

export default Onboarding;
