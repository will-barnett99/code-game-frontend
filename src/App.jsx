import { Route, Routes } from "react-router";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Authentication from "./components/Authentication";
import Kata from "./components/Kata";
import KataGallery from "./components/KataGallery";
import Onboarding from "./components/Onboarding";
import Profile from "./components/Profile";
import ThemeToggle from "./components/ThemeToggle";
import MusicToggle from "./components/MusicToggle";
import Leaderboard from "./components/Leadeboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "./style.css";

function App() {
  return (
    <section className="site-background bg-game-light bg-game-dark">
      <Header />
      <ThemeToggle />
      <MusicToggle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/kata-gallery/:kata_id" element={<Kata />} />
        <Route path="/kata-gallery" element={<KataGallery />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </section>
  );
}

export default App;
