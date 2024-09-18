import FlashCard from "./FlashCard";

const questions = [
  {
    question: "who are you",
    answer: "i am a chosen",
    id: 1,
    bgImg: "./public/img/card1.png",
  },
  {
    question: "they carry?",
    answer: "AK25, No AK47😂",
    id: 2,
    bgImg: "./public/img/card2.png",
  },
  {
    question: "weytin carry you like aeroplane go express",
    answer: "na lion, wen e drop me e do me bye bye😂😂😂 ",
    id: 3,
    bgImg: "./public/img/card3.png",
  },
  {
    question: "they matchet my head, what i had is?",
    answer: "Kam😂😂",
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
        the card above<span style={{ color: "yellow" }}>...</span>
      </marquee>
    </div>
  );
}
