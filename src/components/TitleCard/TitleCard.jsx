// import React, { useEffect } from 'react'
import React, { useEffect, useRef, useState } from 'react';
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCard = ({ title, category }) => {
  
  const [apiData,setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2MmRjMWQ1YTU1YTNkZWE5ZjkwZTZhNjM0ZjQ5NyIsIm5iZiI6MTc0OTQ2Mzg1My4wMSwic3ViIjoiNjg0NmIzMmRiYmZlMzFjYzkwMjkyZTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PXitV9K09g4kn4xlJf6uL23CnSxva6Nd4w77rWwW_p8'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className="titlecard">
      <h2>{title ? title : "Popular"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/card.id`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard

