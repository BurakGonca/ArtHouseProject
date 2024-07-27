import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Exhibition from "./Exhibition";
import SearchBar from "./SearchBar";

const ExhibitionList = () => {
  const { exhibitions } = useContext(DataContext);
  return (
    <>
    <SearchBar/>
      <div className="card-list">
        {exhibitions.map((exhibition) => {
          return <Exhibition key={exhibition.id} exhibition={exhibition} />;
        })}
      </div>
    </>
  );
};

export default ExhibitionList;
