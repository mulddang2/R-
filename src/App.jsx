import { useState } from 'react';
import { letters } from './choosing-the-state-structure/data';
import Letter from './choosing-the-state-structure/Letter';
// NOTE: 배열의 단점으로 includes 사용 시, selectedIds.includes(letter.id)를 호출해서 선택여부확인을 한다는 것이다. 그래서 State에 Set을 보관하고, Set 활용해서 has 메서드 쓰면 좀더 빠르다
export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection

    if (selectedIds.includes(toggledId)) {
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
