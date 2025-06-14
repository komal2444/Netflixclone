// import React, { useEffect, useState } from 'react'
// import './Player.css'
// import back_arrow_icon from '../../assets/back_arrow_icon.png'

// const Player = () => {
//   const [apiData, setApiData] =useState({
//     name:"",
//     key:"",
//     published_at:"",
//     typeof:""

//   })

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2MmRjMWQ1YTU1YTNkZWE5ZjkwZTZhNjM0ZjQ5NyIsIm5iZiI6MTc0OTQ2Mzg1My4wMSwic3ViIjoiNjg0NmIzMmRiYmZlMzFjYzkwMjkyZTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PXitV9K09g4kn4xlJf6uL23CnSxva6Nd4w77rWwW_p8'
//     }
//   };
//   useEffect(()=>{
//     fetch('https://api.themoviedb.org/3/movie/1376434/videos?language=en-US', options)
//     .then(res => res.json())
//     .then(res => setApiData(res.results[0]))
//     .catch(err => console.error(err));

//   },[])

//   return (
//     <div className='player'>
//       <img src={back_arrow_icon} alt="" />
//       <iframe width='90%' height='90%'
//        src={`https://www.youtube.com/embed/${apiData.key}`}
//         title='trailer' frameBorder='0' allowFullScreen></iframe>
//       <div className="player-info">
//         <p>{apiDate.published_at}</p>
//         <p>{apiData.name}</p>
//         <p>{apiData.type}</p>
//       </div>
//     </div>
//   )
// }

// export default Player



// import React, { useEffect, useState } from 'react';
// import './Player.css';
// import back_arrow_icon from '../../assets/back_arrow_icon.png';
// import { useNavigate, useParams } from 'react-router-dom';

// const Player = () => {

//   const {id} = useParams();
//   const navigate =useNavigate()

//   const [apiData, setApiData] = useState({
//     name: "",
//     key: "",
//     published_at: "",
//     type: ""
//   });

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2MmRjMWQ1YTU1YTNkZWE5ZjkwZTZhNjM0ZjQ5NyIsIm5iZiI6MTc0OTQ2Mzg1My4wMSwic3ViIjoiNjg0NmIzMmRiYmZlMzFjYzkwMjkyZTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PXitV9K09g4kn4xlJf6uL23CnSxva6Nd4w77rWwW_p8'
//     }
//   };

//   useEffect(() => {
//     fetch('https://api.themoviedb.org/3/movie/1376434/videos?language=en-US', options)
//       .then(res => res.json())
//       .then(res => {
//         if (res.results && res.results.length > 0) {
//           setApiData(res.results[0]);
//         }
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className='player'>
//       <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
//       {apiData.key ? (
//         <iframe
//           width='90%'
//           height='90%'
//           src={`https://www.youtube.com/embed/${apiData.key}`}
//           title='trailer'
//           frameBorder='0'
//           allowFullScreen
//         ></iframe>
//       ) : (
//         <p>Loading trailer...</p>
//       )}
//       <div className="player-info">
//         <p>{apiData.published_at}</p>
//         <p>{apiData.name}</p>
//         <p>{apiData.type}</p>
//       </div>
//     </div>
//   );
// };

// export default Player;

import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2MmRjMWQ1YTU1YTNkZWE5ZjkwZTZhNjM0ZjQ5NyIsIm5iZiI6MTc0OTQ2Mzg1My4wMSwic3ViIjoiNjg0NmIzMmRiYmZlMzFjYzkwMjkyZTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PXitV9K09g4kn4xlJf6uL23CnSxva6Nd4w77rWwW_p8'
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => {
          if (res.results && res.results.length > 0) {
            setApiData(res.results[0]);
          }
        })
        .catch(err => console.error('API Error:', err));
    }
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
      
      {apiData.key ? (
        <iframe
          width='90%'
          height='90%'
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title='Trailer'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}

      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
