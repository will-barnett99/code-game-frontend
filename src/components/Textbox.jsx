import KataDescription from "./textbox-comps/kata-description";
import RelativeNotes from "./textbox-comps/relative-notes";

function Textbox({ title, description, kata_id }) {
  return (
    <article>
      <KataDescription
        title={title}
        description={description}
        kata_id={kata_id}
      />
      <RelativeNotes />
    </article>
  );
}

export default Textbox;
