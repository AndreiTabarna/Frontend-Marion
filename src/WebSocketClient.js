// WebSocketClient.js

import React, { useEffect } from 'react';

const WebSocketClient = () => {
  const connectWebSocket = () => {
    // Dummy WebSocket connection
    const socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

    // Dummy event listeners (you can customize as needed)
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    socket.addEventListener('message', (event) => {
      console.log('WebSocket message received:', event.data);
      // Handle incoming messages as needed
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
      // Attempt to reconnect on close
      setTimeout(connectWebSocket, 1000);
    });

    return socket;
  };

  useEffect(() => {
    const socket = connectWebSocket();

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: Close the connection on unmount
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      socket.close();
    };
  }, [connectWebSocket]);

  return <div></div>;
};

export default WebSocketClient;

