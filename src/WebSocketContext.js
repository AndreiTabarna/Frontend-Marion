// WebSocketContext.js

import React, { createContext, useContext } from 'react';

const WebSocketContext = createContext();

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};

export const WebSocketProvider = ({ children }) => {
  const socket = new WebSocket('wss://frontend-marion-production.up.railway.app:3001/ws');

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

