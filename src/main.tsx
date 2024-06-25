import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blender from './pages/Blender.tsx';

const router = createBrowserRouter([
  {path: "/Bloom-Portfolio/Home", element: <App/>},
  {path: "/Bloom-Portfolio/Blender", element: <Blender/>},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
