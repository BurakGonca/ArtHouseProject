// import React from "react";
// // import { DataContext } from "../context/DataContext";
// // import AuthContext from "../context/AuthContext";
// import DefaultExhibitionImage from "../assets/img/default-exhibition.jpg";
// import "../assets/style/exhibition.scss";
// // import { Link } from "react-router-dom";


// const Exhibition = ({ exhibition }) => {

  

//   // const { exhibitionSil, exhibitionDuzenle } = useContext(DataContext);
//   // const { isAuthenticated } = useContext(AuthContext);

//   return (
    
//       <div className="card">
//         <div className="img">
//           <img
//             src={exhibition.imageName  ? exhibition.imageName  : DefaultExhibitionImage}
//             alt={exhibition.imageName }
//           />
//         </div>

//         <div className="card-body">
//           <h4>{exhibition.name}</h4>
//           {/* <p>
//             {exhibition.description.substring(
//               0,
//               exhibition.description.substring(0, 30).lastIndexOf(" ")
//             ) + "..."}
//           </p> */}
//           <p>{exhibition.description}</p>

            
//           {/* <p>Start Date: {new Date(exhibition.StartDate).toLocaleDateString()}</p>
//           <p>End Date: {new Date(exhibition.EndDate).toLocaleDateString()}</p>  */}



//           {/* <div className="button-container">
//             {isAuthenticated && (
//               <>
//                 <button onClick={() => exhibitionSil(exhibition.id)} className="delete">
//                   Sil
//                 </button>
//                 <Link to="/arthouse/forms">
//                   {" "}
//                   <button
//                     onClick={() => exhibitionDuzenle(exhibition.id)}
//                     className="edit"
//                   >
//                     Güncelle
//                   </button>
//                 </Link>
                
//               </>
//             )}
            
//           </div> */}

//         </div>



//       </div>
    
//   );
// };

// export default Exhibition;


import React from 'react'
import DefaultExhibitionImage from "../assets/img/default-exhibition.jpg";
import "../assets/style/exhibition.scss";


const Exhibition = ({exhibition}) => {

  if (!exhibition) {
    console.log("sergiler gelmiyor hacıt");
    return null;
  }

  return (
    <div className="card">
      <div className="img">
          <img
            src={exhibition.imageName ? exhibition.imageName : DefaultExhibitionImage}
            alt={exhibition.name}
          />
        </div>
        <div className="card-body">
        <h4>{exhibition.name}</h4>
        <p>
          {exhibition.description}
        </p>



        </div>

    </div>
  )
}

export default Exhibition