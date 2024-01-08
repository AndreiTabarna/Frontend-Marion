// WebSocketClient.js

import React, { useEffect } from 'react';

const WebSocketClient = () => {
  useEffect(() => {
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
      setTimeout(() => {
        const newSocket = new WebSocket('wss://frontend-marion-production.up.railway.app:5775/ws');

        newSocket.addEventListener('open', (event) => {
          console.log('Reconnected:', event);
        });

        newSocket.addEventListener('message', (event) => {
          console.log('Reconnected - WebSocket message received:', event.data);
        });

        newSocket.addEventListener('close', (event) => {
          console.log('Reconnected - WebSocket connection closed:', event);
        });
      }, 1000);
    });

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: We are not closing the connection here to avoid the error
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // No need to close the connection here
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

