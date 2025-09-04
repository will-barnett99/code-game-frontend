import { Route, Routes } from "react-router";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Kata from "./components/Kata";
import KataGallery from "./components/KataGallery";
import Onboarding from "./components/Onboarding";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leadeboard";
import SignUpPrompt from "./components/SignUpPrompt";

import "./style.css";

function App() {
  return (
    <section className="relative site-background bg-game-light bg-game-dark ">
      <Header />
      <SignedOut>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/:kata_id" element={<Kata />} />
          <Route path="/authentication" element={<SignUpPrompt />} />
        </Routes>
      </SignedOut>
      <SignedIn>
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
