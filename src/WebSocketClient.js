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
    };

    socket.addEventListener('close', handleWebSocketClose);

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: We are not closing the connection here to keep it open
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // Remove the event listener to avoid potential memory leaks
      socket.removeEventListener('close', handleWebSocketClose);
    };
  }, []);

  // Infinite loop (not recommended, use with caution)
  useEffect(() => {
    const interval = setInterval(() => {
      // Check if the WebSocket connection is still open
      if (socket.readyState === WebSocket.CLOSED) {
        // Reconnect if the connection is closed
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
      }
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <div></div>;
};

export default WebSocketClient;

