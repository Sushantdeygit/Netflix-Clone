'use client'
import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function StateProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <StateContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </StateContext.Provider>
  );
}