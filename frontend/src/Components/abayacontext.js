import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  


  const [abaya, setAbaya] = useState([]);

  // const [cart,set]
  const store = { abaya, setAbaya };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
