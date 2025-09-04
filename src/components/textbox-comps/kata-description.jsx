import KataTags from "../KataTags";

function KataDescription({ title, description, kata_id }) {
  return (
    <section className="mt-6">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="font-bold">Hashtags:</p>
      <KataTags kata_id={kata_id} />
    </section>
  );
}

export default KataDescription;
