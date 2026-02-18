import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from './App.jsx'
import TimesheetProject from './components/timcards.jsx'
import './index.css'
import TcPersonalScreen from './components/simuAgents.jsx';
import SimuAgentsProject from './components/simuAgents.jsx';

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
    path: "/simuAgents",
    element: <SimuAgentsProject />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)




