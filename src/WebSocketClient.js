// WebSocketClient.js

import React, { useEffect, useRef } from 'react';

const WebSocketClient = () => {
  // Use a ref to store the WebSocket instance
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize WebSocket connection only if it hasn't been created
    if (!socketRef.current) {
      // Dummy WebSocket connection
      socketRef.current = new WebSocket('wss://frontend-marion-production.up.railway.app:5775/ws');

      // Dummy event listeners (customize as needed)
      socketRef.current.addEventListener('open', (event) => {
        console.log('WebSocket connection opened:', event);
      });

      socketRef.current.addEventListener('message', (event) => {
        console.log('WebSocket message received:', event.data);
      });

      socketRef.current.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);
      });

      console.log('WebSocketClient component mounted');
    }

    // Cleanup function
    return () => {
      console.log('Cleanup: WebSocketClient component unmounted');
      // Commenting out the line below to avoid closing the connection
      // socketRef.current.close();
    };
  }, []);

  return <div>WebSocketClient Dummy Component</div>;
};

export default WebSocketClient;

