import { Link } from "react-router";
function Landing() {
  return (
    <>
      <section className="h-[calc(100%-60px)] flex flex-col gap-16 content-center justify-center text-white text-center">
        <h1 className="font-pixelify text-9xl font-bold">
          Welcome to our coding game
        </h1>

        <Link to={`/onboarding`} className="">
          <button
            className="font-pixelify text-6xl font-bold w-[372px] h-[160px] bg-center bg-cover cursor-pointer"
            style={{
              backgroundImage:
                "url('/assets/game-controller-joystick-button.png')",
            }}
          >
            Start
          </button>
        </Link>
      </section>
    </>
  );
}

export default Landing;
