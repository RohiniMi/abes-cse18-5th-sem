import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ImageSlider from './ImageSlider';
import ImageRoatator from './ImageRoatator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ImageSlider/>
    <ImageRoatator/>
  </React.StrictMode>
);

