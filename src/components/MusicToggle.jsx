import { useRef, useState, useEffect } from "react";

export default function MusicToggle({ src = "assets/background-music.mp3" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [volume, setVolume] = useState(0.7); 
  const [speed, setSpeed] = useState(1);   

  useEffect(() => {
    const savedVol = parseFloat(localStorage.getItem("musicVolume"));
    const savedSpd = parseFloat(localStorage.getItem("musicSpeed"));
    if (!Number.isNaN(savedVol)) setVolume(savedVol);
    if (!Number.isNaN(savedSpd)) setSpeed(savedSpd);
  }, []);

  const ensureAudio = () => {
    if (!audioRef.current) {
      const a = new Audio(src);
      a.loop = true;
      a.volume = volume;      
      a.playbackRate = speed; 
      audioRef.current = a;
    }
    return audioRef.current;
  };

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

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-900
                     dark:bg-gray-700 dark:text-white font-semibold shadow"
        >
          {playing ? "🔇 Stop Music" : "🎵 Play Music"}
        </button>

        <button
          onClick={() => setShowSettings((s) => !s)}
          aria-expanded={showSettings}
          aria-controls="music-settings"
          className="px-3 py-2 rounded-lg bg-gray-200 text-gray-900
                     dark:bg-gray-700 dark:text-white shadow"
          title="Settings"
        >
          ⚙️
        </button>
      </div>

      {showSettings && (
        <div
          id="music-settings"
          className="w-64 p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 shadow backdrop-blur
                     border border-black/5 dark:border-white/10"
        >
          <label className="block text-xs mb-1 text-gray-700 dark:text-gray-200">
            Volume: {Math.round(volume * 100)}%
          </label>
          <input
            type="range" min="0" max="1" step="0.01"
            value={volume}
            onChange={(e) => changeVolume(e.target.value)}
            className="w-full"
          />

          <label className="block text-xs mt-3 mb-1 text-gray-700 dark:text-gray-200">
            Speed: {speed.toFixed(2)}×
          </label>
          <input
            type="range" min="0.5" max="2" step="0.05"
            value={speed}
            onChange={(e) => changeSpeed(e.target.value)}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}