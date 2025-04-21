// ToursContextProvider.jsx
import React, { createContext, useState } from 'react';
import tourData from '../tours.json';  // Renamed import to avoid confusion

export const tourContext = createContext();

const ToursContextProvider = (props) => {
  const [productId, setProductid] = useState(null);
  const [tours] = useState(tourData.tours);  // Access the tours array from the JSON

  const contextValue = { 
    tours,
    productId, 
    setProductid 
  };

  return (
    <tourContext.Provider value={contextValue}>
      {props.children}
    </tourContext.Provider>
  );
};

export default ToursContextProvider;