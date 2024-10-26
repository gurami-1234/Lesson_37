import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextComponent from './context/ThemeContextComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextComponent>
      
      <App />

    </ThemeContextComponent>
  </React.StrictMode>
);
