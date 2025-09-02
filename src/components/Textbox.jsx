import KataDescription from "./textbox-comps/kata-description";
import RelativeNotes from "./textbox-comps/relative-notes";

function Textbox({ title, description }) {
  return (
    <article>
      <KataDescription title={title} description={description} />
      <RelativeNotes />
    </article>
  );
}

export default Textbox;
