import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const [secilenExhibition, setSecilenExhibition] = useState("");
  const [exhibitions, setExhibition] = useState([]);

  //ekleme-düzeltme
  const exhibitionEkle = async (yeni) => {
    let url = "http://localhost:5215/api/Exhibition";
    try {
      if (!secilenExhibition) {
        const response = await axios.post(url, yeni);
        setExhibition((prev) => [...prev, response.data]);
      } else {
        url += `/${secilenExhibition.id}`;
        const response = await axios.put(url, yeni);
        setExhibition((prev) =>
          prev.map((exhibition) =>
            exhibition.id === secilenExhibition.id ? response.data : exhibition
          )
        );
        setSecilenExhibition("");
      }
    } catch (error) {
      console.error("Exhibition ekleme hatası:", error);
    }
  };

  

  const exhibitionGetir = async () => {
    let url = "http://localhost:5215/api/Exhibition";

    const response = await fetch(url);
    const result = await response.json();
    const exhibitions = result.$values;
    setExhibition(exhibitions);
    console.log("Sergiler:", exhibitions);
  };

  useEffect(() => {
    exhibitionGetir();
  }, []);

 

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        exhibitionEkle,
        exhibitions,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
