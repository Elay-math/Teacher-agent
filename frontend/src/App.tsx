import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function sendMessage() {
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });

    const data = await res.json();
    setResponse(data.response);
  }

  return (
    <main>
      <h1>Teacher Agent</h1>

      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Write something in English..."
      />

      <button onClick={sendMessage}>Send</button>

      {response && (
        <section>
          <h2>Teacher response</h2>
          <p>{response}</p>
        </section>
      )}
    </main>
  );
}

export default App;