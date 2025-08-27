import { Link } from "react-router";

function Landing() {
  return (
    <>
      <h1>Welcome to our coding game</h1>
      <Link to={`/onboarding`}>
        <button>Start</button>
      </Link>
    </>
  );
}

export default Landing;
