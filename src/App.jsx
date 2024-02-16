import { useState } from 'react';
import { initialLetters } from './choosing-the-state-structure/data';
import Letter from './choosing-the-state-structure/Letter';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  // NOTE: 하이라이트 된 문자 highlightedLetter의 상태를 보관하면, letters와 데이터가 중복되기 때문,,,,, 버튼 클릭 한 후, letters 배열이 업데이트 될 때, highlightedLetter와 다른 새 문자 객체가 생성되기 때문에 ----> 하이라이터가 순간 사라지는 버그가 발생한다.
  // const [highlightedLetter, setHighlightedLetter] = useState(null);

  const [highlightedId, setHighlightedId] = useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starredId) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
