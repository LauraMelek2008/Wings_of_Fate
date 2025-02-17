import React from 'react'
// import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import Router from './router/Router.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}>
  </RouterProvider>
)
