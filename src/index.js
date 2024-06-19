import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Рендерим наше приложение в корневой элемент
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Если вы хотите, чтобы ваше приложение работало офлайн и загружалось быстрее, вы можете изменить unregister() на register() ниже. Обратите внимание, что это может привести к некоторым подводным камням.
// Подробнее: https://bit.ly/CRA-PWA
serviceWorker.unregister();