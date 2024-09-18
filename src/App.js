import FlashCard from "./FlashCard";

const questions = [
  {
    question: "who are you",
    answer: "i am a chosen",
    id: 1,
    bgImg: "./public/img/card1.png",
  },
  {
    question: "Ak25 ?",
    answer: "No, AK47😂",
    id: 2,
    bgImg: "./public/img/card2.png",
  },
  {
    question: "did lion do you bye bye 👋",
    answer: "yes, after he dropped me",
    id: 3,
    bgImg: "./public/img/card3.png",
  },
  {
    question: "who are you",
    answer: "i am a chosen, who are you",
    id: 4,
    bgImg: "./public/img/card1.png",
  },
];

export default function App() {
  return (
    <div className="card-comp">
      <FlashCard question={questions} />
      <marquee className="text">
        <span style={{ color: "yellow" }}>Are you a chosen ?</span> touch any of
        the card above
      </marquee>
    </div>
  );
}
