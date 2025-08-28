import KataCard from "./KataCard";

function KataGallery() {
  const katas = [
    {
      id: 1,
      title: "FizzBuzz",
      topic: "Strings",
      difficulty: "Beginner",
      description: "Classic loop challenge.",
    },
    {
      id: 2,
      title: "Palindrome Checker",
      topic: "Strings",
      difficulty: "Intermediate",
      description: "Check if a word reads the same backwards.",
    },
    {
      id: 3,
      title: "Roman Numerals",
      topic: "Numbers",
      difficulty: "Advanced",
      description: "Convert numbers to Roman numerals.",
    },
    {
      id: 4,
      title: "Factorial Finder",
      topic: "Numbers",
      difficulty: "Beginner",
      description: "Calculate the factorial of a given number.",
    },
    {
      id: 5,
      title: "Reverse Array",
      topic: "Arrays",
      difficulty: "Beginner",
      description: "Reverse the order of elements in an array.",
    },
    {
      id: 6,
      title: "Sum of Multiples",
      topic: "Numbers",
      difficulty: "Intermediate",
      description: "Sum all multiples of 3 or 5 below a given number.",
    },
    {
      id: 7,
      title: "Anagram Checker",
      topic: "Strings",
      difficulty: "Intermediate",
      description: "Determine if two words are anagrams of each other.",
    },
    {
      id: 8,
      title: "FizzBuzz Array",
      topic: "Arrays",
      difficulty: "Beginner",
      description:
        "Return an array replacing multiples of 3 and 5 with 'Fizz'/'Buzz'.",
    },
    {
      id: 9,
      title: "Count Vowels",
      topic: "Strings",
      difficulty: "Beginner",
      description: "Count the number of vowels in a given string.",
    },
    {
      id: 10,
      title: "Find Maximum",
      topic: "Arrays",
      difficulty: "Beginner",
      description: "Find the largest number in an array.",
    },
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

export default KataGallery;
