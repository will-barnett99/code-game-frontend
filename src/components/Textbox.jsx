import KataDescription from "./textbox-comps/kata-description";
import RelativeNotes from "./textbox-comps/relative-notes";

function Textbox({ title, description, kata_id, tags, note }) {
  return (
    <article>
      <KataDescription
        title={title}
        description={description}
        kata_id={kata_id}
        tags={tags}
      />
      <RelativeNotes note={note} />
    </article>
  );
}

export default Textbox;
