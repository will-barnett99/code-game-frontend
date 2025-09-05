import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import MusicToggle from "./MusicToggle";

function Header() {
  return (
    <header className="sticky top-0 flex font-bold text-white p-4">
      <Link to="/">
        <h1 className="text-3xl">{"<KataQuest>"}</h1>
      </Link>
      <nav className="flex flex-row gap-4 items-center ml-auto pr-4 font-pixelify text-lg text-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Link to="/">PLay</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/profile">Profile</Link>
          <SignOutButton />
        </SignedIn>
      </nav>
      <ThemeToggle />
      <MusicToggle />
    </header>
  );
}
export default Header;
