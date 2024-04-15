import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import StorecontextProvider from './Context/Storecontext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StorecontextProvider>
    <App />
  </StorecontextProvider>
  </BrowserRouter>
)
