import { Route, Routes } from "react-router";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Kata from "./components/Kata";
import KataGallery from "./components/KataGallery";
import Onboarding from "./components/Onboarding";
import Profile from "./components/Profile";
import ThemeToggle from "./components/ThemeToggle";
import MusicToggle from "./components/MusicToggle";
import Leaderboard from "./components/Leadeboard";
import "./style.css";

function App() {
  return (
    <section className="site-background bg-game-light bg-game-dark">
      <ThemeToggle />
      <MusicToggle />
      <SignedOut>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/:kata_id" element={<Kata />} />
        </Routes>
      </SignedOut>
      <SignedIn>
        <Header />
        <Routes>
          <Route path="/" element={<KataGallery />} />
          <Route path="/:kata_id" element={<Kata />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </SignedIn>
    </section>
  );
}

export default App;
