// import React, { useEffect, useState } from 'react'
// // import SearchBar from './SearchBar'
// import Exhibition from './Exhibition';
// import axios from 'axios';

// const ExhibitionList = () => {

//   const [exhibitions, setExhibitions] = useState([]);

//   useEffect(() => {
//     const fetchExhibitions = async () => {

//         const response = await axios.get('http://localhost:5215/api/Exhibition');
//         const exhibitions = response.data.$values;
//         exhibitions.forEach(exhibition => {
//           console.log('Exhibition:', exhibition);
//         });
//         setExhibitions(exhibitions);

//     };

//     fetchExhibitions();
//   }, []);

//   return (
//     <>
//     {/* <SearchBar/> */}
//       <div className="card-list">
//         {exhibitions.map(
//           (exhibition, index) => {
//             return <Exhibition key={index} exhibition={exhibition} />
//           }

//         )}
//       </div>
//     </>
//   )
// }

// export default ExhibitionList





import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Exhibition from "./Exhibition";

const ExhibitionList = () => {
  const { exhibitions } = useContext(DataContext);
  return (
    <div className="card-list">
      {exhibitions.map((exhibition, index) => {
        return <Exhibition key={index} exhibition={exhibition} />;
      })}
    </div>
  );
};

export default ExhibitionList;
