// WebSocketClient.js

import React, { useEffect, useRef } from 'react';

const WebSocketClient = () => {
  const socketRef = useRef(null);

  const connectWebSocket = () => {
    const socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    socket.addEventListener('message', (event) => {
      console.log('WebSocket message received:', event.data);
      // Handle incoming messages as needed
    });

    // Note: No 'close' event listener

    socketRef.current = socket;
  };

  useEffect(() => {
    connectWebSocket();

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: No need to close the connection on unmount
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // No need to close the connection here
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

