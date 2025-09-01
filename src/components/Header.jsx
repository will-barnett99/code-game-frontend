import { Link } from "react-router";

function Header() {
  return (
    <header className="flex items-center justify-start px-4">
      <h1 className="font-pixelify text-4xl font-bold px-4 pt-2 text-auto ">
        KataQuest
      </h1>

      <nav className="font-pixelify text-xl font-bold ml-auto mr-40 mt-5 text-auto ">
        <Link to="/" className="px-4">
          Home
        </Link>
        <Link to="/kata-gallery" className="px-4">
          Play
        </Link>
        <a href="#" className="px-4">
          Leaderboard
        </a>
        <a href="#" className="px-4">
          Profile
        </a>
      </nav>
    </header>
  );
}

export default Header;
