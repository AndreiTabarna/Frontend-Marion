// WebSocketClient.js

import React, { useEffect } from 'react';

let socket;

const handleWebSocketClose = (event) => {
  console.log('WebSocket connection closed:', event);
  // Attempt to reconnect after a delay if needed
  setTimeout(initWebSocket, 2000);
};


const initWebSocket = () => {
  // Dummy WebSocket connection
  socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

  // Dummy event listeners (you can customize as needed)
  socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
  });

  socket.addEventListener('message', (event) => {
    console.log('WebSocket message received:', event.data);
    // Handle incoming messages as needed
  });

  socket.addEventListener('close', handleWebSocketClose);
};

const WebSocketClient = () => {
  useEffect(() => {
    console.log('WebSocketClient component mounted');

    // Introduce a 2-second delay before opening the WebSocket
    const delay = setTimeout(() => {
      initWebSocket();
    }, 2000);

    // Cleanup function
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      clearTimeout(delay); // Clear the timeout in case the component is unmounted before the delay completes
      socket.removeEventListener('close', handleWebSocketClose);
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

