import KataCard from "./KataCard";

function KataGallery() {
  const katas = [
    { id: 1, title: "FizzBuzz", topic:"Strings", difficulty: "Beginner" , description: "Classic loop challenge."},
    { id: 2, title: "Palindrome Checker", topic:"Strings", difficulty: "Intermediate", description: "Check if a word reads the same backwards."},
    { id: 3, title: "Roman Numerals", topic:"Numbers", difficulty: "Advanced", description: "Convert numbers to Roman numerals."},
  ];



  return (
    <>
      <p> Welcome! Here are a list of katas for you to choose from ...</p>
      {katas.map((kata) => (
        <KataCard
          key={kata.id}
          title={kata.title}
          topic={kata.topic}
          difficulty={kata.difficulty}
          description={kata.description}

        />
      ))}
    </>
  );
}

export default KataGallery
