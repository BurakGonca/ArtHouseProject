import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import '../assets/style/forms.scss';

const Forms = () => {
  const { exhibitionEkle } = useContext(DataContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageName, setImageName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const exhibition = {
      name,
      description,
      imageName,
      startDate,
      endDate,
      categoryId: parseInt(categoryId, 10),
    };

    await exhibitionEkle(exhibition);

    setName("");
    setDescription("");
    setImageName("");
    setStartDate("");
    setEndDate("");
    setCategoryId("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Sergi Adı"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Açıklama"
        required
      />
      <input
        type="text"
        value={imageName}
        onChange={(e) => setImageName(e.target.value)}
        placeholder="Resim URL"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <input
        type="number"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        placeholder="Kategori ID"
        required
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

export default Forms;
