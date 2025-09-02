import { Link } from "react-router";

function Header() {
  return (
    <header className="flex items-center justify-start px-4">
      <h1 className="font-pixelify text-4xl font-bold px-4 pt-2 text-auto ">
        <Link to="/">KataQuest</Link>
      </h1>

      <nav className="font-pixelify text-xl font-bold ml-auto mr-40 mt-5 text-auto ">
        <Link to="/" className="px-4">
          Home
        </Link>

        <Link to="/kata-gallery" className="px-4">
          Play
        </Link>

        <Link to="/leaderboard" className="px-4">
          Leaderboard
        </Link>

        <Link to="/profile" className="px-4">
          Profile
        </Link>
      </nav>
    </header>
  );
}

export default Header;
