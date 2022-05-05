import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SelectTheme } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectTheme>
      <App />
    </SelectTheme>
  </React.StrictMode>
);
