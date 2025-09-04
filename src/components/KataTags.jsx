import { useEffect, useState } from "react";
import getKataContent from "../api/getKataContent";

function KataTags({ kata_id }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getKataContent(kata_id, "tags").then(({ tags }) => {
      setTags(tags);
    });
  }, [kata_id]);
  return (
    <ul className="kata-tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default KataTags;
