export default function FeedbackForm2() {
  function handleClick() {
    // NOTE: prompt 반환값 자체가 '사용자가 입력한 값'이기 때문에 훅이 불필요함
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}