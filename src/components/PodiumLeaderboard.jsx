function PodiumLeaderboard({ players = [] }) {
  const sorted = [...players]
    .filter(Boolean)
    .sort((a, b) => (b?.score ?? 0) - (a?.score ?? 0))
    .slice(0, 3);

  const [first, second, third] = sorted;

  const sizes = {
    h1: "h-28 md:h-60", 
    h2: "h-20 md:h-36", 
    h3: "h-16 md:h-24", 
  };

  const colors = {
    gold:   "bg-gradient-to-b from-yellow-300 to-amber-400",
    silver: "bg-gradient-to-b from-gray-200 to-gray-400",
    bronze: "bg-gradient-to-b from-amber-600 to-amber-700",
  };

  return (
    <section className="max-w-4xl mx-auto w-full px-4 py-10">
      <header className="text-center mb-8">
        <h2 className="font-pixelify text-4xl sm:text-5xl text-auto mt-10 mb-50">
          🏆 Leaderboard 🏆
        </h2>
      </header>

      <main className="w-full">
        <div className="grid grid-cols-3 gap-0 items-end w-full mb-3">
          <figure
            className={`w-full ${sizes.h2} ${colors.silver} relative flex items-end justify-center`}
            title={second ? `2nd – ${second.name} (${second.score})` : "2nd place"}
          >
            <img
              src="/assets/medal-2.png"
              alt="Silver medal"
              className="absolute bottom-2 h-12 w-12 object-contain pointer-events-none select-none"
            />
          </figure>

          <figure
            className={`w-full ${sizes.h1} ${colors.gold} relative flex items-end justify-center`}
            title={first ? `1st – ${first.name} (${first.score})` : "1st place"}
          >
            <img
              src="/assets/medal-1.png"
              alt="Gold medal"
              className="absolute bottom-2 h-12 w-12 object-contain pointer-events-none select-none"
            />
          </figure>

          <figure
            className={`w-full ${sizes.h3} ${colors.bronze} relative flex items-end justify-center`}
            title={third ? `3rd – ${third.name} (${third.score})` : "3rd place"}
          >
            <img
              src="/assets/medal-3.png"
              alt="Bronze medal"
              className="absolute bottom-2 h-12 w-12 object-contain pointer-events-none select-none"
            />
          </figure>
        </div>

        <ul className="grid grid-cols-3 text-center text-auto">
          <li>
            <div className="font-pixelify text-lg">{second?.name ?? "—"}</div>
            <small className="opacity-80">
              {second?.score != null ? `XP: ${second.score}` : "XP: —"}
            </small>
          </li>
          <li>
            <div className="font-pixelify text-lg">{first?.name ?? "—"}</div>
            <small className="opacity-80">
              {first?.score != null ? `XP: ${first.score}` : "XP: —"}
            </small>
          </li>
          <li>
            <div className="font-pixelify text-lg">{third?.name ?? "—"}</div>
            <small className="opacity-80">
              {third?.score != null ? `XP: ${third.score}` : "XP: —"}
            </small>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default PodiumLeaderboard;