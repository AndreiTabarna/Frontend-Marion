// WebSocketClient.js

import React, { useEffect } from 'react';
import { useWebSocket } from './WebSocketContext';

const WebSocketClient = () => {
  const socket = useWebSocket();

  useEffect(() => {
    // Dummy event listeners (you can customize as needed)
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    socket.addEventListener('message', (event) => {
      console.log('WebSocket message received:', event.data);
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
    });

    console.log('WebSocketClient component mounted');

    // Cleanup function
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // Note: Do not close the connection here to keep it open
    };
  }, [socket]);

  return <div>WebSocketClient Dummy Component</div>;
};

export default WebSocketClient;

