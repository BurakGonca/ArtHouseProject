import React, { useContext } from "react";
import "../assets/style/exhibition.scss";
import DefaultExhibitionImage from "../assets/img/default-exhibition.jpg";
import { DataContext } from "../context/DataContext";
import AuthContext from "../context/AuthContext";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Link } from "react-router-dom";



const getCategoryName = (categoryId) => {
  switch (categoryId) {
    case 1:
      return "Resim";
    case 2:
      return "Heykel";
    case 3:
      return "Fotoğraf";
    case 4:
      return "Dijital Sanat";
    case 5:
      return "Seramik";
    default:
      return "Bilinmeyen Kategori"; 
  }
};


const Exhibition = ({ exhibition }) => {
  const { exhibitionSil, exhibitionDuzenle, search } = useContext(DataContext);
  const { isAuthenticated } = useContext(AuthContext);

  const startDate = format(new Date(exhibition.startDate), "dd MMMM yyyy", {
    locale: tr,
  });
  const endDate = format(new Date(exhibition.endDate), "dd MMMM yyyy", {
    locale: tr,
  });

  return (
    exhibition.name.toLowerCase().startsWith(search.toLowerCase()) && (
      <div className="card">
        <div className="img">
          <img
            src={
              exhibition.imageName
                ? exhibition.imageName
                : DefaultExhibitionImage
            }
            alt={exhibition.name}
          />
        </div>
        <div className="card-body">
          <h4>{exhibition.name}</h4>
          <p>
            {exhibition.description.substring(
              0,
              exhibition.description.substring(0, 30).lastIndexOf(" ")
            ) + "..."}
          </p>

            {/* Kategori Adı Gösterimi */}
          <div className="category-info">
            <span className="category-label">Kategori:</span>
            <span className="category-value">
              {getCategoryName(exhibition.categoryId)}
            </span>
          </div>

          <div className="date-info">
            <div className="date-item">
              <span className="date-label">Başlangıç:</span>
              <span className="date-value">{startDate}</span>
            </div>
            <div className="date-item">
              <span className="date-label">Bitiş:</span>
              <span className="date-value">{endDate}</span>
            </div>
          </div>
          <div className="button-container2">
            <Link
              to={`/arthouse/exhibitionlist/${exhibition.id}`}
              key={exhibition.id}
            >
              <button className="detail">Sergi Detayı</button>
            </Link>
          </div>

          <div className="button-container">
            {isAuthenticated && (
              <>
                <button
                  onClick={() => exhibitionSil(exhibition.id)}
                  className="delete"
                >
                  Sil
                </button>
                <Link to="/arthouse/forms">
                  <button
                    onClick={() => exhibitionDuzenle(exhibition.id)}
                    className="edit"
                  >
                    Güncelle
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Exhibition;
