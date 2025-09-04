function KataTags({ tags }) {
  return tags && tags.length > 0 ? (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  ) : null;
}

export default KataTags;
