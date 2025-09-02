import { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setMessages(prev => [...prev, { text: input, fromUser: true }, { text: `You said: "${input}" 😄`, fromUser: false }]);
    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, width: 300, background: "#1a1a1a", color: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
      <h3 style={{ marginBottom: 10 }}>💬 Chat</h3>
      <div style={{ maxHeight: 200, overflowY: "auto", marginBottom: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.fromUser ? "right" : "left", margin: "5px 0" }}>
            <span style={{ background: msg.fromUser ? "#646cff" : "#333", padding: "5px 10px", borderRadius: 5, display: "inline-block" }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "100%", padding: 5, borderRadius: 5, border: "1px solid #555", marginBottom: 5 }}
      />
      <button onClick={handleSend} style={{ width: "100%" }}>Send</button>
    </div>
  );
}
