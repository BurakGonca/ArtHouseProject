import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  // const [secilenExhibition, setSecilenExhibition] = useState("");
  // const [exhibtion,set]

  return (
    <DataContext.Provider value={{
      
      data, setData
      
      }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
