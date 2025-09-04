import { Link } from "react-router";
import { SignInButton } from "@clerk/clerk-react";

function HeaderSignedOut() {
  return (
    <header className="flex items-center justify-start px-4">
      <h1 className="font-pixelify text-4xl font-bold px-4 pt-2 text-auto ">
        <Link to="/">KataQuest</Link>
      </h1>

      <nav className="font-pixelify text-xl font-bold ml-auto mr-40 mt-5 text-auto ">
        <SignInButton />
      </nav>
    </header>
  );
}

export default HeaderSignedOut;
