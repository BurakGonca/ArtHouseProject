import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const [secilenExhibition, setSecilenExhibition] = useState("");
  const [exhibitions, setExhibition] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageName, setImageName] = useState("");

  //ekleme-düzeltme
  const exhibitionEkle = async (yeni) => {
    let url = "http://localhost:5215/api/Exhibition";
    try {
      if (!secilenExhibition) {
        const response = await axios.post(url, yeni);
        setExhibition((prev) => [...prev, response.data]);
      } else {
        url += `/${secilenExhibition.id}`;
        const response = await axios.patch(url, yeni);
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

  
  useEffect(() => {
    if (secilenExhibition) {
      setName(secilenExhibition.name);
      setDescription(secilenExhibition.description);
      setImageName(secilenExhibition.imageName);
    }
  }, [secilenExhibition]);


  const exhibitionDuzenle = (id) => {
    setSecilenExhibition(exhibitions.find((item) => item.id === id));
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


  
  const exhibitionSil = async (id) => {
    Swal.fire({
      title: "Sergiyi silmek istediğinize emin misiniz?",
      text: "İşemi geri alamazsınız!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#007F73",
      cancelButtonColor: "#4CCD99",
      confirmButtonText: "Evet, siliyorum!",
      cancelButtonText: "Vazgeç",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setExhibition((prev) =>
          prev.filter((statedenGelen) => statedenGelen.id !== id)
        );
       
        const url = `http://localhost:5215/api/Exhibition/${id}`;
        await axios.delete(url);

        Swal.fire({
          title: "Silindi!",
          text: "Sergi kayıtlardan kalıcı olarak silindi.",
          icon: "success",
        });
      }
    });
  };




  
 //search
 const [search, setSearch] = useState("");

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        exhibitionEkle,
        exhibitions,
        exhibitionSil,
        secilenExhibition,
        exhibitionDuzenle,
        setName,         // Yeni ekleme
        setDescription,  // Yeni ekleme
        setImageName,    // Yeni ekleme

        
        search,
        setSearch, //searchden gelen
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
