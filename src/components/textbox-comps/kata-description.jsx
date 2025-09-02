function KataDescription({ title, description }) {
  return (
    <section className="mt-6">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </section>
  );
}

export default KataDescription;
