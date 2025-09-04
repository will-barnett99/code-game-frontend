import { Link } from "react-router";
import { useAuth } from "@clerk/clerk-react"

function NextKata({ kata_id }) {

  const { isSignedIn } = useAuth();

  return (
    <Link
      to={isSignedIn ? `/${+kata_id + 1}` : `/authentication`}
      className="ml-auto mt-auto"
     >
      <button className="w-26 h-10 text-white bg-orange-600 [box-shadow:4px_4px_0_#000000] cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:-translate-x-0.5">
        Next Kata
      </button>
    </Link>
  );
}

export default NextKata;
