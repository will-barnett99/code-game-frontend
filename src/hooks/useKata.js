import { useEffect, useState } from "react";
import getSingleKata from "../api/getKata";
import getKataContent from "../api/getKataContent";

export default function useKata(kata_id) {
  const [kata, setKata] = useState(null);
  const [tags, setTags] = useState([]);
  const [hint, setHint] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!kata_id) return;

    setLoading(true);
    setError(null);
    getSingleKata(kata_id).then(({ kata }) => setKata(kata));

    Promise.all([
      getKataContent(kata_id, "hint"),
      getKataContent(kata_id, "tags"),
      getKataContent(kata_id, "note"),
    ])
      .then(([hintResponse, tagsResponse, noteResponse]) => {
        if (hintResponse.hint) setHint(hintResponse.hint);
        if (tagsResponse.tags) setTags(tagsResponse.tags);
        if (noteResponse.note) setNote(noteResponse.note);
      })
      .catch((err) => {
        console.error("Failed to load kata:", err);
        setError("Failed to load kata. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, [kata_id]);

  return { kata, tags, hint, note, loading, error };
}
