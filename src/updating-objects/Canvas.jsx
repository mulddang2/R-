import { useImmer } from 'use-immer';
import Background from './Background';
import Box from './Box';
/** 1. 반복을 줄이고 싶을 때, Immer 설치한다
 *  2. ...로 계속 복사하는 부분에, useState 대신 useImmer를 넣는다.
 *  3. draft 받고, 값을 변경한다.
 */
const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition,
  });

  // immer 라이브러리 사용하면, 작성한 코드는 “법칙을 깨고” 객체를 변경하는 것처럼 보일 수 있습니다.
  function handleMove(dx, dy) {
    updateShape((draft) => {
      draft.position.x += dx; // 값이 변경되는 것 같지만, 하지만 일반적인 변경과는 다르게 이것은 이전 state를 덮어쓰지 않는다!
      draft.position.y += dy;
    });
  }
  // updateShape({
  //   ...shape,
  //   position: {
  //     x: shape.position.x + dx,
  //     y: shape.position.y + dy,
  //   },
  // });

  function handleColorChange(e) {
    updateShape((draft) => {
      draft.color = e.target.value;
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value='orange'>orange</option>
        <option value='lightpink'>lightpink</option>
        <option value='aliceblue'>aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}
