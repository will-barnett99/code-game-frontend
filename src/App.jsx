import { Route, Routes } from "react-router";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Authentication from "./components/Authentication";
import Kata from "./components/Kata";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/kata" element={<Kata />} />
      </Routes>
    </>
  );
}

export default App;
