// src/App.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './styles.css';

const socket = io('http://localhost:5000');

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSendMessage = (message) => {
    socket.emit('message', message);
  };

  return (
    <div className="App">
      <h1>Chat Application</h1>
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
