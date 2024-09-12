import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { products_arr } from './data/data.js';

createRoot(document.getElementById('root')).render(
  <App products={products_arr} />
)
