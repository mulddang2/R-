import { useState } from 'react';

export default function FeedbackForm() {
  // 모든 훅 호출을 첫번째 리턴 전에 해야한다!!
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type='submit'>Send</button>
      </form>
    );
  }
}
