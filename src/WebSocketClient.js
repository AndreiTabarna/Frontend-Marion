// WebSocketClient.js

import React, { useEffect, useState } from 'react';

const WebSocketClient = () => {
  const [isComponentMounted, setComponentMounted] = useState(true);

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

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: We are not closing the connection here to keep it open
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // Remove the event listener to avoid potential memory leaks
      socket.removeEventListener('close', handleWebSocketClose);
    };
  }, [isComponentMounted]); // Make sure to include isComponentMounted in the dependency array

  return isComponentMounted ? <div></div> : null;
};

export default WebSocketClient;

