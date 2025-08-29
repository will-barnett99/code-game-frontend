import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faGamepad} />
function Landing() {
  return (
    <>
      <section className=" flex flex-col gap-16 content-center justify-center text-white text-center">
        <h1 className="font-pixelify text-9xl font-bold pt-32">
          Welcome to our coding game
        </h1>

        <Link to={`/onboarding`} className="font-pixelify font-bold cursor-pointer text-center pt-16">
        <FontAwesomeIcon icon={faGamepad} className="text-6xl text-gray-500" />
          <button className="text-6xl px-4"
          >
            Start
          </button>
          <FontAwesomeIcon icon={faGamepad}  className="text-6xl text-gray-500" />
        </Link>
      </section>
    </>
  );
}

export default Landing;
