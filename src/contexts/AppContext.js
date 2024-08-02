import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isApplicationOpen, setApplicationOpen] = useState(true);

  const closeApplication = () => {
    setApplicationOpen(!isApplicationOpen);
  };

  return (
    <AppContext.Provider value={{ isApplicationOpen, closeApplication }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
