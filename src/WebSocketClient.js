// WebSocketClient.js

import React, { useEffect, useState } from 'react';

const WebSocketClient = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Dummy WebSocket connection
    const newSocket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

    // Dummy event listeners (you can customize as needed)
    newSocket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
      setSocket(newSocket);
    });

    newSocket.addEventListener('message', (event) => {
      console.log('WebSocket message received:', event.data);
      // Handle incoming messages as needed
    });

    newSocket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);

      // Attempt to reconnect on close
      setTimeout(() => {
        console.log('Attempting to reconnect...');
        newSocket.close();
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

