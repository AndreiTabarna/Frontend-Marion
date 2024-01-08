// WebSocketClient.js

import React, { useEffect } from 'react';

let socket;

const establishWebSocketConnection = () => {
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

  const handleWebSocketClose = (event) => {
    console.log('WebSocket connection closed:', event);
    // Attempt to reconnect after a delay if needed
    setTimeout(establishWebSocketConnection, 2000);
  };

  socket.addEventListener('close', handleWebSocketClose);
};

const WebSocketClient = () => {
  useEffect(() => {
    // Establish WebSocket connection after a 2-second delay
    const connectionTimeout = setTimeout(establishWebSocketConnection, 2000);

    // Cleanup function
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      clearTimeout(connectionTimeout); // Clear the timeout if the component is unmounted
      socket.removeEventListener('close', handleWebSocketClose);
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

