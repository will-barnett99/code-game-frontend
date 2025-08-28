import { Link } from "react-router";
import bgClassic from "/assets/Background-Image.svg";

function Landing() {
  return (
    <>
      <section
        className="min-h-screen  bg-cover bg-center flex flex-col items-center justify-start text-white"
        style={{ backgroundImage: `url(${bgClassic})` }}
      >
        <h1 className="font-pixelify text-9xl font-bold mt-70 mb-6">
          Welcome to our coding game
        </h1>
        
        <Link to={`/onboarding`}>
          <button className="font-pixelify text-6xl font-bold mt-50 mb-6 w-100 h-100 bg-contain bg-no-repeat bg-center text-white
             flex items-center justify-center" style={{ backgroundImage: "url('/assets/game-controller-joystick-button.png')" }}>Start</button>
        </Link>
      </section>
    </>
  );
}

export default Landing;
