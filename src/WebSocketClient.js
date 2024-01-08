// WebSocketClient.js

import React, { useEffect, useRef } from 'react';

const WebSocketClient = () => {
  const socketRef = useRef(null);

  useEffect(() => {
    // Dummy WebSocket connection
    socketRef.current = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

    // Dummy event listeners (you can customize as needed)
    socketRef.current.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    socketRef.current.addEventListener('message', (event) => {
      console.log('WebSocket message received:', event.data);
      // Handle incoming messages as needed
    });

    const handleWebSocketClose = (event) => {
      console.log('WebSocket connection closed:', event);
      // Attempt to reconnect after a delay if needed
      setTimeout(() => {
        socketRef.current = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');
        socketRef.current.addEventListener('close', handleWebSocketClose);
      }, 1000);
    };

    socketRef.current.addEventListener('close', handleWebSocketClose);

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: We are not closing the connection here to keep it open
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // Remove the event listener to avoid potential memory leaks
      socketRef.current.removeEventListener('close', handleWebSocketClose);
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

