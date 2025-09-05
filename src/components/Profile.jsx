import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMedal,
  faTerminal,
  faHashtag,
  faCode,
  faSyncAlt,
  faCheckCircle,
  faListUl,
  faBug,
  faBolt,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <>
      <div className="w-[1024px] mx-auto mt-24 flex flex-row gap-12">
        <aside className="w-1/3 p-4 border-8 text-center border-orange-500 bg-yellow-400 text-orange-700 [box-shadow:8px_8px_0_#000000]">
          <figure>
            <figcaption>
              <FontAwesomeIcon
                icon={faUser}
                className="p-8 border-8 text-4xl border"
              />
              <h2 className="font-bold text-xl mt-1">JaneDoe42</h2>
              <p>example@email.com</p>
              <p>"Code. Debug. Repeat."</p>
            </figcaption>
          </figure>

          <section>
            <div className="mt-6">
              <p className="font-bold">Level: 12</p>
              <div className="w-full bg-gray-200">
                <div
                  className="bg-orange-700 h-3"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p>XP: 3450</p>
            </div>

            <div className="mt-6">
              <p className="font-bold">Challenges Completed: 28 / 50</p>
              <div className="w-full bg-gray-200">
                <div
                  className="bg-orange-700 h-3"
                  style={{ width: "56%" }}
                ></div>
              </div>
            </div>
          </section>

          <section className="mt-6 w-full">
            <ul className="flex flex-wrap justify-between list-none text-[14px]">
              <li className="w-1/2 flex flex-col items-center opacity-100 mb-8">
                <FontAwesomeIcon icon={faMedal} className="text-3xl" /> First
                Script
              </li>
              <li className="w-1/2 flex flex-col items-center opacity-100 mb-8">
                <FontAwesomeIcon icon={faTerminal} className="text-3xl" />{" "}
                Console Commander
              </li>
              <li className="w-1/2 flex flex-col items-center opacity-100 mb-8">
                <FontAwesomeIcon icon={faHashtag} className="text-3xl" />{" "}
                Variable Pro
              </li>
              <li className="w-1/2 flex flex-col items-center opacity-25 mb-8">
                <FontAwesomeIcon icon={faCode} className="text-3xl" /> Function
                Finder
              </li>
              <li className="w-1/2 flex flex-col items-center opacity-25 mb-8">
                <FontAwesomeIcon icon={faSyncAlt} className="text-3xl" /> Loop
                Learner
              </li>
              <li className="w-1/2 flex flex-col items-center opacity-25 mb-8">
                <FontAwesomeIcon icon={faCheckCircle} className="text-3xl" />{" "}
                Conditional Champ
              </li>
              <li className="w-1/2 flex flex-col items-center opacity-25 mb-8">
                <FontAwesomeIcon icon={faListUl} className="text-3xl" /> Array
                Ace
              </li>
              <li className="w-1/2 flex flex-col items-center opacity-25 mb-8">
                <FontAwesomeIcon icon={faBug} className="text-3xl" /> Debug
                Detective
              </li>
            </ul>
          </section>
        </aside>

        <main className="w-2/3">
          <section className="flex flex-col gap-2 p-4 border-8 border-orange-500 bg-yellow-400 text-orange-700 [box-shadow:8px_8px_0_#000000]">
            <h4 className="text-2xl font-extrabold">FizzBuzz</h4>
            <p>Classic Loop challenge</p>
            <ul className="flex gap-2">
              <li className="">
                <FontAwesomeIcon icon={faBolt} /> Strings
              </li>
              <li className="">
                <FontAwesomeIcon icon={faDumbbell} className="rotate-45" />
                Beginner
              </li>
            </ul>
            <Link className="ml-auto p-2 bg-orange-700 text-white">
              Continue
            </Link>
          </section>
          <section className="mt-12 p-4 border-8 border-orange-500 bg-yellow-400 text-orange-700 [box-shadow:8px_8px_0_#000000]">
            <h3 className="font-bold text-lg mb-2">Leaderboard</h3>
            <ol className="list-decimal ml-6">
              <li>UserA - 5000 XP</li>
              <li>UserB - 4500 XP</li>
              <li>JaneDoe42 - 3450 XP</li>
              <li>UserC - 3200 XP</li>
              <li>UserD - 3000 XP</li>
            </ol>
          </section>
        </main>
      </div>
    </>
  );
}
export default Profile;
