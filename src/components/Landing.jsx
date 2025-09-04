import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function Landing() {
  return (
    <>
      <section className="w-[100vw] h-[calc(100vh-48px)] flex flex-col gap-4  md:gap-8 lg:gap-16 items-center justify-center lg:justify-start lg:pt-48 text-center font-pixelify text-white">
        <h1 className="max-w-[1024px] text-5xl md:text-7xl lg:text-9xl font-bold">
          Welcome to our coding game
        </h1>

        <Link to={`/onboarding`}>
          <button className="flex items-center gap-2 mx-auto p-4 text-3xl md:text-5xl lg:text-7xl cursor-pointer font-bold">
            <FontAwesomeIcon
              icon={faGamepad}
              className="text-gray-500 text-3xl lg:text-5xl"
            />{" "}
            Start
            <FontAwesomeIcon
              icon={faGamepad}
              className="text-gray-500 text-3xl lg:text-5xl"
            />
          </button>
        </Link>
      </section>
    </>
  );
}

export default Landing;
