// WebSocketClient.js

import React, { useEffect } from 'react';

let socket;

const WebSocketClient = () => {
  useEffect(() => {
    // Establish WebSocket connection
    socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

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
      // Attempt to reconnect after a delay
      setTimeout(() => {
        console.log('Reconnecting...');
        socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');
      }, 2000);
    });

    // Cleanup function
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

