import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import DefaultExhibitionImage from "../assets/img/default-exhibition.jpg";
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import "../assets/style/exhibitiondetail.scss";

const ExhibitionDetail = () => {
  const { exhibitions } = useContext(DataContext);
  const params = useParams();
  const parametre = params.exhibitionId;

  const selectedExhibition = exhibitions.find(
    (exhibition) => exhibition.id.toString() === parametre
  );

  if (!selectedExhibition) {
    return <p>Sergi bulunamadı.</p>;
  }

  const startDate = format(new Date(selectedExhibition.startDate), "dd MMMM yyyy", { locale: tr });
  const endDate = format(new Date(selectedExhibition.endDate), "dd MMMM yyyy", { locale: tr });

  return (
    <main className="flex justify-center p-4">
      <figure className="adaptive-glass">
        <img
          src={
            selectedExhibition.imageName
              ? selectedExhibition.imageName
              : DefaultExhibitionImage
          }
          alt="Exhibition"
        />
        <figcaption>
          <h3>{selectedExhibition.name}</h3>
          <p>{selectedExhibition.description}</p>
          <p><strong>Başlangıç Tarihi:</strong> {startDate}</p>
          <p><strong>Bitiş Tarihi:</strong> {endDate}</p>
          <Link
            to="/arthouse/exhibitionlist"
          >
            Tüm Sergiler
          </Link>
        </figcaption>
      </figure>
    </main>
  );
};

export default ExhibitionDetail;
