import { useState } from 'react';

/** NOTE: batching 이란??
 *  - 이벤트 핸들러가 다 처리되고 나서 마지막에 리렌더링 한다. 그래서 중간에 아무리 열심히 하고, 마지막에 값을 바꾸면 답이 없다.
 */

/** NOTE: 리엑트에서 명명규칙!!!
 * - 업데이터 함수 인수의 이름은 해당 state 변수의 첫 글자로 지정하는 것이 일반적입니다.
 * ex. setEnabled(e => !e);
        setLastName(ln => ln.reverse());

  - 근데 뒤에꺼 풀로 써도 된다. ex. setEnabled(enabled => !enabled)
 */

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
