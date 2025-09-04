import { useEffect, useState } from "react";
import KataCard from "./KataCard";
import getKatas from "../api/getKatas";

function KataGallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getKatas().then(({ katas }) => {
      setData(katas);
    });
  }, []);
  //  className="w-full max-w-[1024px] mx-auto mt-24 pb-24  lg:px-4"
  return (
    <main className="w-full max-w-[1024px] px-4 py-8 lg:gap-8 lg:mx-auto">
      <h2 className="text-2xl font-extrabold text-orange-700 [text-shadow:3px_3px_0_#000] mb-4">
        Choose a kata :
      </h2>
      <section className="flex gap-4 flex-wrap">
        <KataCard katas={data} />
      </section>
    </main>
  );
}

export default KataGallery;
