import { useState } from "react";

export default function Chatbox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
  
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
  
      const data = await res.json();
  
      if (!data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ No reply received." }]);
        return;
      }
  
      const aiMessage = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Fetch error:", err);
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ Failed to connect to AI." }]);
    }
  };
  

  return (
    <div>
      <div style={{ minHeight: "200px", border: "1px solid #ccc", padding: "10px" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: "5px 0" }}>
            <strong>{msg.role === "user" ? "You:" : "AI:"}</strong> {msg.content}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

