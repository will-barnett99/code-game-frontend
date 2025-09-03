import { Route, Routes } from "react-router";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Landing from "./components/Landing";
import HeaderSignedIn from "./components/HeaderSignedIn";
import HeaderSignedOut from "./components/HeaderSignedOut";
import Kata from "./components/Kata";
import KataGallery from "./components/KataGallery";
import Onboarding from "./components/Onboarding";
import Profile from "./components/Profile";
import ThemeToggle from "./components/ThemeToggle";
import MusicToggle from "./components/MusicToggle";
import Leaderboard from "./components/Leadeboard";
import { GoldProvider } from "./components/GoldContext";

import "./style.css";


function App() {
  return (
    <section className="site-background bg-game-light bg-game-dark ">
      <ThemeToggle />
      <MusicToggle />
      <SignedOut>
        <HeaderSignedOut />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/:kata_id" element={<Kata />} />
        </Routes>
      </SignedOut>
      <SignedIn>
        <HeaderSignedIn />
        <GoldProvider>
          <Routes>
            <Route path="/" element={<KataGallery />} />
            <Route path="/:kata_id" element={<Kata />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </GoldProvider>
      </SignedIn>
    </section>
  );
}

export default App;
