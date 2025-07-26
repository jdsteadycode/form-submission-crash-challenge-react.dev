import { useState } from "react";

export default function FeedbackForm() {
  // initial values (states)
  let [isSent, setIsSent] = useState(false);
  let [message, setMessage] = useState("");

  // when message is submitted or review is submitted!
  if (isSent) {
    // update the DOM
    return <h1>Thankyou for your feedback</h1>;
  }

  // otherwise, initially display the new Form
  else {
    return (
      <form
        onSubmit={(e) => {
          // stop re-render
          e.preventDefault();
          // alert(`Sending: "${message}"`);  // ignore the toast*

          // update the state
          setIsSent((isSent = !isSent));
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
