import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from './App.jsx'
import TimesheetProject from './components/timcards.jsx'
import './index.css'
import TcPersonalScreen from './components/tcPersonal.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/timcards",
    element: <TimesheetProject />,
  },
  {
    path: "/tcPersonal",
    element: <TcPersonalScreen />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)




