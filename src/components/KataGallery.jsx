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

  return (
    <main className="w-[1208px] mx-auto mt-24">
      <h2 className="text-5xl font-extrabold text-orange-700 [text-shadow:3px_3px_0_#000] mb-12">
        Choose a kata :
      </h2>
      <section className="flex gap-8 flex-wrap">
        <KataCard katas={data} />
      </section>
    </main>
  );
}

export default KataGallery;
