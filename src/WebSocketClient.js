// WebSocketClient.js

import React, { useEffect } from 'react';

let socket;

// Delay the WebSocket connection by 2 seconds
setTimeout(() => {
  socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

  // Dummy event listeners (you can customize as needed)
  socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
  });

  socket.addEventListener('message', (event) => {
    console.log('WebSocket message received:', event.data);
    // Handle incoming messages as needed
  });

  const handleWebSocketClose = (event) => {
    console.log('WebSocket connection closed:', event);
    // Attempt to reconnect after a delay if needed
    setTimeout(() => {
      socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');
      socket.addEventListener('close', handleWebSocketClose);
    }, 1000);
  };

  socket.addEventListener('close', handleWebSocketClose);
}, 2000);


const cleanup = () => {
  console.log('Cleanup: WebSocketClient component unmounted');
  socket.removeEventListener('close', handleWebSocketClose);
};

export { cleanup };

