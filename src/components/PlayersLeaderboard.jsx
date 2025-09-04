function PlayersLeaderboard() {
  const players = [
    { name: "PlayerOne", score: 1400 },
    { name: "AsyncAce42", score: 1300 },
    { name: "PixelHero", score: 1200 },
    { name: "RefactorRex99", score: 1100 },
    { name: "CodeKid7", score: 1000 },
    { name: "ByteNinja", score: 900 },
    { name: "TerminalWizard13", score: 800 },
  ];

  const rows = [...players]
    .sort((a, b) => (b?.score ?? 0) - (a?.score ?? 0))
    .slice(0, 7)
    .map((p, i) => ({ ...p, position: i + 4 }));

  const display = Array.from({ length: 7 }).map((_, i) => {
    const pos = i + 4;
    const data = rows[i];
    return {
      position: pos,
      name: data?.name ?? "—",
      score: Number.isFinite(data?.score) ? data.score : null,
      isPlaceholder: !data,
    };
  });

  return (
    <section className="max-w-4xl mx-auto mt-25 px-4 py-6">
      <ol className="w-full pixel-card rounded-md bg-white/85 backdrop-blur divide-y divide-black/10">
        {display.map(({ position, name, score, isPlaceholder }) => (
          <li
            key={position}
            className={`flex items-center gap-3 px-5 py-8 ${
              isPlaceholder ? "opacity-60" : ""
            }`}
          >
            <span className="font-pixelify text-lg w-20 shrink-0 whitespace-nowrap">
              {ordinal(position)}
            </span>

            <span className="font-pixelify text-lg flex-1 min-w-0 truncate">
              {name}
            </span>

            <span className="font-sans text-sm opacity-90 tabular-nums w-28 shrink-0 text-right whitespace-nowrap">
              {score == null ? "XP: —" : `XP: ${score.toLocaleString()}`}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default PlayersLeaderboard;