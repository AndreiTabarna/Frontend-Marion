// WebSocketClient.js

import React, { useEffect } from 'react';

// Singleton WebSocket instance
let socket;

const WebSocketClient = () => {
  useEffect(() => {
    // Check if the WebSocket instance already exists
    if (!socket) {
      // If not, create a new WebSocket instance
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
        // Attempt to reconnect after a delay if needed
        setTimeout(() => {
          socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');
        }, 1000);
      });
    }

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: We are not closing the connection here to keep it open
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // No specific cleanup needed
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

