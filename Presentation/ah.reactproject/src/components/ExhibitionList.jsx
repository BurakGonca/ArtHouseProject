import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Exhibition from "./Exhibition";
import SearchBar from "./SearchBar";
import ReactPaginate from "react-paginate";

const ExhibitionList = () => {
  const { exhibitions } = useContext(DataContext);


  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Her sayfada kaç item olduğu


  const offset = currentPage * itemsPerPage;
  const currentItems = exhibitions.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(exhibitions.length / itemsPerPage);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      {/* <SearchBar /> */}
      <div className="card-list">
        {currentItems.map((exhibition) => {
          return <Exhibition key={exhibition.id} exhibition={exhibition} />;
        })}
      </div>

      <ReactPaginate
        previousLabel={"← "}
        nextLabel={" →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"pagination__item"}
        pageLinkClassName={"pagination__link"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
      />
    </>
  );
};

export default ExhibitionList;
