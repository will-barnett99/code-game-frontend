import { Route, Routes } from "react-router";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Authentication from "./components/Authentication";
import Kata from "./components/Kata";
import KataGallery from "./components/KataGallery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/kata" element={<Kata />} />
        <Route path="/kata-gallery" element={<KataGallery />} />
      </Routes>
    </>
  );
}

export default App;
