import { useEffect, useState } from "react";
import getTags from "../api/getTags";

function KataTags({ kata_id }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getTags(kata_id).then(({ tags }) => {
      console.log(tags);
      setTags(tags);
    });
  }, []);
  return (
    <ul className="kata-tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default KataTags;
