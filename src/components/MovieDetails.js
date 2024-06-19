// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '7f91a06e';

const translations = {
  en: ["Year:", "Rated:", "Released:", "Runtime:", "Genre:", "Director:", "Writer:", "Actors:", "Plot:", "Language:", "Country:", "Awards:"],
  ru: ["Год:", "Рейтинг:", "Выпущено:", "Продолжительность:", "Жанр:", "Режиссер:", "Сценарист:", "Актеры:", "Сюжет:", "Язык:", "Страна:", "Награды:"],
  et: ["Aasta:", "Hinnatud:", "Välja antud:", "Kestus:", "Žanr:", "Režissöör:", "Kirjanik:", "Näitlejad:", "Krunt:", "Keel:", "Riik:", "Auhinnad:"]
};

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const labels = translations[language];

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div>
        <img src={movie.Poster} alt={movie.Title} style={{ width: '300px' }} className='MovieDetailPoster' />
      </div>
      <div style={{ marginLeft: '20px' }} className='movieTextDetail'>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} style={{ position: 'absolute', top: 10, left: 10 }}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="et">Estonian</option>
        </select>
        <h2>{movie.Title}</h2>
        <p><strong>{labels[0]}</strong> {movie.Year}</p>
        <p><strong>{labels[1]}</strong> {movie.Rated}</p>
        <p><strong>{labels[2]}</strong> {movie.Released}</p>
        <p><strong>{labels[3]}</strong> {movie.Runtime}</p>
        <p><strong>{labels[4]}</strong> {movie.Genre}</p>
        <p><strong>{labels[5]}</strong> {movie.Director}</p>
        <p><strong>{labels[6]}</strong> {movie.Writer}</p>
        <p><strong>{labels[7]}</strong> {movie.Actors}</p>
        <p><strong>{labels[8]}</strong> {movie.Plot}</p>
        <p><strong>{labels[9]}</strong> {movie.Language}</p>
        <p><strong>{labels[10]}</strong> {movie.Country}</p>
        <p><strong>{labels[11]}</strong> {movie.Awards}</p>
      </div>
    </div>
  );
};

export default MovieDetails;