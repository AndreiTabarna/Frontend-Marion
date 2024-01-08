// WebSocketClient.js

import React, { useEffect } from 'react';

const WebSocketClient = () => {
  useEffect(() => {
    let socket;

    const connectWebSocket = () => {
      socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

      socket.addEventListener('open', (event) => {
        console.log('WebSocket connection opened:', event);
      });

      socket.addEventListener('message', (event) => {
        console.log('WebSocket message received:', event.data);
        // Handle incoming messages as needed
      });

      socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);

        // Reconnect on close with a timeout
        setTimeout(() => {
          connectWebSocket();
        }, 10000);
      });
    };

    // Initial connection
    connectWebSocket();

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: Close the connection on unmount
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      if (socket) {
        socket.close();
      }
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

