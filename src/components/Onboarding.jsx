import CarouselData from "./carousel-comps/CarouselData";

function Onboarding() {
  const CarouselSlides = [
    {
      title: "Embark on your coding journey!",
      img: "assets/carrot-character.svg",
      text: "Want to test your coding knowledge? whether a complete beginner, an expert or somewhere in between - traverse the world of KataQuest by completing katas!",
    },
    {
      title: "How does it work?",
      img: "assets/console-log.png",
      text: "It’s simple you select a kata from our kata list - then you complete it - you can navigate the difficulty of the katas to suit your level of knowledge. Each Kata completed grants you 10 gold coins!",
    },
    {
      title: "We're here to help.",
      img: "assets/confused-broccoli.png",
      text: "Each kata comes with a notes section providing helpful documentation to help you crack the code. Furthermore, we will try our best to provide helpful hints/feedback if your initial solution isn’t quite right",
    },
    {
      title: "Track your progress",
      img: "assets/group of veggies.png",
      text: "Join our community and keep track of your journey by creating a profile. Signing up ensures your progress is saved.",
    },
    {
      title: "Onwards hero!",
      img: "assets/hero-carrot.png",
      text: "you can try your first kata without signing in, alternatively you can sign in and access all of our kata That's it - time to embark on your quest - have fun!",
    },
  ];

  return <CarouselData slides={CarouselSlides} />;
}

export default Onboarding;
