// WebSocketClient.js

import React, { useEffect } from 'react';

const WebSocketClient = () => {
  useEffect(() => {
    // Function to create a new WebSocket connection
    const createWebSocket = () => {
      const socket = new WebSocket('wss://frontend-marion-production.up.railway.app:5775/ws');

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
        // Attempt to create a new WebSocket connection
        createWebSocket();
      });

      return socket;
    };

    // Initial WebSocket connection
    const socket = createWebSocket();

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: We are not closing the connection here to keep it open
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // Close the connection on unmount
      socket.close();
    };
  }, []);

  return <div>WebSocketClient Dummy Component</div>;
};

export default WebSocketClient;

