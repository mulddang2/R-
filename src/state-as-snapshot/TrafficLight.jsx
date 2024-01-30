import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    alert(walk ? '다음은 정지입니다' : '다음은 걷기입니다');
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>change To {walk ? 'Stop' : 'Walk'}</button>
      <h1 style={{ color: walk ? 'darkgreen' : 'darked' }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
