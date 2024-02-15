/* eslint-disable react/prop-types */
// 챌린지1: 챌린지 1 of 4: 업데이트되지 않는 컴포넌트 수정하기
// 업데이트 되지 않는 이유: color prop로 초기화한 color state를 갖고 있었기 때문에 state 변수 완전 제거 후, color prop을 직접 사용해야한다.

// 1) 구조분해 할당 사용
// export default function Clock({ color, time }) {

//   return <h1 style={{ color: color }}>{time}</h1>;
// }
export default function Clock(props) {
  return <h1 style={{ color: props.color }}>{props.time}</h1>;
}
