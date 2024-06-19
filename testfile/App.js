// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';
import { lightTheme, darkTheme } from './theme'; // Импортируем темы из theme.js

const App = () => {
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState('light'); // Используем состояние для темы

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')); // Функция для переключения темы
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <div className="app" style={{ background: currentTheme.background, color: currentTheme.text }}>
        <Header setMovies={setMovies} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} theme={currentTheme} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

