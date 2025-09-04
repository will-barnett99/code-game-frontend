import { useRef, useState, useEffect } from "react";

const TRACKS = [
  {
    title: "The Landscape",
    src: "https://dratnwitrfkzdeimgrtg.supabase.co/storage/v1/object/public/kata-quest-music/Taketones_TheLandscape.mp3",
  },
  {
    title: "Simple Moments",
    src: "https://dratnwitrfkzdeimgrtg.supabase.co/storage/v1/object/public/kata-quest-music/Taketones_SimpleMoments.mp3",
  },
  {
    title: "Rainy Sunday",
    src: "https://dratnwitrfkzdeimgrtg.supabase.co/storage/v1/object/public/kata-quest-music/Taketones_RainySunday.mp3",
  },
  {
    title: "Golden Era Groove",
    src: "https://dratnwitrfkzdeimgrtg.supabase.co/storage/v1/object/public/kata-quest-music/Taketones_GoldenEra%20Groove.mp3",
  },
  {
    title: "Lake of Memory",
    src: "https://dratnwitrfkzdeimgrtg.supabase.co/storage/v1/object/public/kata-quest-music/Taketones_LakeOf%20Memory.mp3",
  },
];

export default function MusicToggle({ tracks = TRACKS }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [speed, setSpeed] = useState(1);

  const [trackIndex, setTrackIndex] = useState(() => {
    const saved = parseInt(localStorage.getItem("musicTrackIndex"), 10);
    return Number.isFinite(saved) ? saved : 0;
  });

  const currentTrack = tracks[trackIndex] ?? tracks[0];

  useEffect(() => {
    const savedVol = parseFloat(localStorage.getItem("musicVolume"));
    const savedSpd = parseFloat(localStorage.getItem("musicSpeed"));
    if (!Number.isNaN(savedVol)) setVolume(savedVol);
    if (!Number.isNaN(savedSpd)) setSpeed(savedSpd);
  }, []);

  const ensureAudio = () => {
    if (!audioRef.current) {
      const a = new Audio(currentTrack.src);
      a.loop = true;
      a.volume = volume;
      a.playbackRate = speed;
      audioRef.current = a;
    }
    return audioRef.current;
  };

  useEffect(() => {
    if (!currentTrack) return;
    const a = ensureAudio();
    a.src = currentTrack.src;
    a.loop = true;
    a.load();
    if (playing) {
      a.play().catch((e) => console.error("Audio play failed:", e));
    }
    localStorage.setItem("musicTrackIndex", String(trackIndex));
  }, [trackIndex, currentTrack?.src]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  const togglePlay = async () => {
    const a = ensureAudio();
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch (e) {
        console.error("Audio play failed:", e);
      }
    }
  };

  const changeVolume = (val) => {
    const v = Number(val);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
    localStorage.setItem("musicVolume", String(v));
  };

  const changeSpeed = (val) => {
    const s = Number(val);
    setSpeed(s);
    if (audioRef.current) audioRef.current.playbackRate = s;
    localStorage.setItem("musicSpeed", String(s));
  };

  const nextTrack = () => setTrackIndex((i) => (i + 1) % tracks.length);
  const prevTrack = () =>
    setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);

  return (
    <div className="ml-4 flex flex-col items-end gap-2">
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="w-[138px] h-[40px] rounded-lg bg-gray-700"
        >
          {playing ? "🔇 Stop Music" : "🎵 Play Music"}
        </button>

        {/* <button
          onClick={() => setShowSettings((s) => !s)}
          className="px-3 py-2 rounded-lg bg-gray-200 text-gray-900
                     dark:bg-gray-700 dark:text-white shadow"
          title="Settings"
        >
          ⚙️
        </button> */}
      </div>

      {showSettings && (
        <div
          className="w-96 p-4 rounded-lg bg-white/90 dark:bg-gray-800/90 shadow backdrop-blur
               border border-black/5 dark:border-white/10 space-y-3"
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={prevTrack}
              className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700"
              title="Previous"
            >
              ◀︎
            </button>

            <p className="mx-2 text-sm text-gray-700 dark:text-gray-200 text-center flex-1 truncate">
              Now playing:{" "}
              <span className="font-semibold">{currentTrack?.title}</span>
            </p>

            <button
              type="button"
              onClick={nextTrack}
              className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700"
              title="Next"
            >
              ▶︎
            </button>
          </div>

          <div>
            <label className="block text-xs mb-1 text-gray-700 dark:text-gray-200">
              Volume: {Math.round(volume * 100)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => changeVolume(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-xs mb-1 text-gray-700 dark:text-gray-200">
              Speed: {speed.toFixed(2)}×
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.05"
              value={speed}
              onChange={(e) => changeSpeed(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
