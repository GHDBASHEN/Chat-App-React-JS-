// src/components/ChatMessages.js
import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
