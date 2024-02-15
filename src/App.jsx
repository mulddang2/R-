import { useState } from 'react';
import AddItem from './choosing-the-state-structure/AddItem';
import PackingList from './choosing-the-state-structure/PackingList';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  // NOTE: packed, total은 아래와 같이 만들어서 쓸 수 있기 때문에, 상태로 저장할 필요가 없다.

  const packed = items.filter((item) => item.packed).length;
  const total = items.length;

  function handleAddItem(title) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  // NOTE: 체크 상태를 업데이트 하기위해서 필요함
  function handleChangeItem(nextItem) {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          console.log('nextItem:' + nextItem);
          return nextItem;
        } else {
          console.log('item:' + item);
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
}
