import React, { useState, useEffect } from 'react';

const Laila = () => {
  const [messages, setMessages] = useState([
    { from: 'laila', text: 'मैं लैला हूँ... बताओ शाह के लिए क्या जानना चाहती हो?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const reply = { from: 'laila', text: 'शाह अभी ध्यान में हैं, मगर मैं हूँ...' };

    setMessages([...messages, userMsg, reply]);
    setInput('');
  };

  return (
    <div style={{ padding: 20, fontFamily: 'serif' }}>
      <h2>Shahbot</h2>
      <div style={{ border: '1px solid black', padding: 10, minHeight: 300 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <p><b>{msg.from === 'user' ? 'You' : 'Laila'}:</b> {msg.text}</p>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
        style={{ width: '80%', marginTop: 10 }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Laila;
