import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from './App.jsx'
import TimesheetProject from './components/timcards.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/timcards",
    element: <TimesheetProject />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)




