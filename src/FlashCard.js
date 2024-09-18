import { useState } from "react";

export default function FlashCard({ question }) {
  const [selectedId, setSelectedId] = useState(null);

  function touchCard(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div>
      <ul className="flash-cards">
        {question.map((quest) => (
          <li
            onClick={() => touchCard(quest.id)}
            key={quest.id}
            className={quest.id === selectedId ? "selected" : "card"}
          >
            {quest.id === selectedId ? quest.answer : quest.question}
          </li>
        ))}
      </ul>
    </div>
  );
}
