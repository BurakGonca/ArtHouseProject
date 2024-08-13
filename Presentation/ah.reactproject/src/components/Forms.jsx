
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "../assets/style/forms.scss";

const Forms = () => {
  const { exhibitionEkle, secilenExhibition, setName, setDescription, setImageName, setStartDate, setEndDate, setCategoryId } = useContext(DataContext);

  const [name, setLocalName] = useState("");
  const [description, setLocalDescription] = useState("");
  const [imageName, setLocalImageName] = useState("");
  const [startDate, setLocalStartDate] = useState("");
  const [endDate, setLocalEndDate] = useState("");
  const [categoryId, setLocalCategoryId] = useState("");

  useEffect(() => {
    if (secilenExhibition) {
      setLocalName(secilenExhibition.name);
      setLocalDescription(secilenExhibition.description);
      setLocalImageName(secilenExhibition.imageName);
      setLocalStartDate(secilenExhibition.startDate);
      setLocalEndDate(secilenExhibition.endDate);
      setLocalCategoryId(secilenExhibition.categoryId.toString());
    }
  }, [secilenExhibition]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const exhibition = {
      name: name,
      description: description,
      imageName: imageName,
      startDate: startDate,
      endDate: endDate,
      categoryId: parseInt(categoryId, 10),
    };

    await exhibitionEkle(exhibition);

    setLocalName("");
    setLocalDescription("");
    setLocalImageName("");
    setLocalStartDate("");
    setLocalEndDate("");
    setLocalCategoryId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{secilenExhibition ? "Sergi Güncelle" : "Sergi Ekle"}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setLocalName(e.target.value)}
        placeholder="Sergi Adı"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setLocalDescription(e.target.value)}
        placeholder="Açıklama"
        required
      />
      <input
        type="text"
        value={imageName}
        onChange={(e) => setLocalImageName(e.target.value)}
        placeholder="Resim URL"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setLocalStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setLocalEndDate(e.target.value)}
        required
      />
      <input
        type="number"
        value={categoryId}
        onChange={(e) => setLocalCategoryId(e.target.value)}
        placeholder="Kategori ID"
        required
      />
      <input
        type="submit"
        className="form-button"
        value={secilenExhibition ? "Güncelle" : "Ekle"}
      />
    </form>
  );
};

export default Forms;
