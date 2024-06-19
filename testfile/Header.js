// src/components/Header.js
import React, { useState } from 'react';
import axios from 'axios';
import { lightTheme, darkTheme } from '../theme'; // Импортируем темы из theme.js

const API_KEY = '7f91a06e';

const Header = ({ setMovies, toggleTheme }) => { // Добавляем toggleTheme в props
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Используем toggleTheme для переключения темы */}
        {/* <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="et">Estonian</option>
        </select> */}
      </div>
    </header>
  );
};

export default Header;
