import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);

    const botMsg = {
      sender: 'bot',
      text: `You said: "${input}". I'm a demo bot 😄`
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botMsg]);
    }, 800);

    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      {open && (
        <div className="w-80 h-[500px] bg-white/80 backdrop-blur-lg border border-gray-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeInUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <FaRobot className="text-lg" />
              Deputy Bot
            </div>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl max-w-[75%] whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-blue-100 self-end ml-auto text-right'
                    : 'bg-gray-100 self-start mr-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2 items-center bg-white">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-blue-800 hover:bg-blue-700 text-white rounded-full p-2"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}

      {/* Chat button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-full shadow-xl px-4 py-3 flex items-center gap-2 animate-fadeIn"
        >
          <FaRobot className="text-lg animate-bounce" />
          Chat with us
        </button>
      )}
    </div>
  );
};

export default Chatbot;
