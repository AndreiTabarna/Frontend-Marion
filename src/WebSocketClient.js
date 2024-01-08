// WebSocketClient.js

import React, { useEffect } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

const WebSocketClient = () => {
  useEffect(() => {
    // Configure WebSocket options
    const options = {
      WebSocket: ReconnectingWebSocket, // Use the reconnecting-websocket library
      connectionTimeout: 1000,
      maxRetries: Infinity,
      maxReconnectionDelay: 4000,
      minReconnectionDelay: 1000,
    };

    // Dummy WebSocket connection
    const socket = new ReconnectingWebSocket('wss://frontend-marion-production.up.railway.app:3001/ws', [], options);

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
    });

    // Do not close the connection on unmount
    console.log('WebSocketClient component mounted');

    // Cleanup function
    // Note: Close the connection on unmount
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      socket.close();
    };
  }, []);

  return <div></div>;
};

export default WebSocketClient;

