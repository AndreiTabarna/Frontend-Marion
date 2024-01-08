// WebSocketClient.js

import React, { useEffect } from 'react';

const WebSocketClient = () => {
  useEffect(() => {
    // Dummy WebSocket connection
    let socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

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

    // Simulate a persistent connection using setInterval
    const intervalId = setInterval(() => {
      if (socket.readyState !== WebSocket.OPEN) {
        console.warn('WebSocket is not open. Reconnecting...');
        socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');
        socket.addEventListener('close', handleWebSocketClose);
      }
    }, 5000); // Adjust the interval as needed

    // Cleanup function
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      clearInterval(intervalId);
      socket.close();
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

