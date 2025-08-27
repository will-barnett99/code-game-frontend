import { Route, Routes } from "react-router";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Authentication from "./components/Authentication";
import Kata from "./components/Kata";
import KataGallery from "./components/KataGallery";
import Onboarding from "./components/Onboarding";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/kata" element={<Kata />} />
        <Route path="/kata-gallery" element={<KataGallery />} />
      </Routes>
    </>
  );
}

export default App;
