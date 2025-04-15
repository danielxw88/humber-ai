import { useState, useEffect } from "react";

export default function Chatbox({ presetQuestion }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Update input box when preset question is passed
  useEffect(() => {
    if (presetQuestion) {
      setInput(presetQuestion);
    }
  }, [presetQuestion]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await res.json();

      const aiMessage = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Fetch error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error connecting to AI." },
      ]);
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // prevents form submission or accidental refresh
            handleSend();
          }
        }}
      />

      <button onClick={handleSend}>Send</button>
    </div>
  );
}
