import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePage, ContactUs, About } from './pages/index'

import { createBrowserRouter, RouterProvider } from "react-router"
const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <ContactUs />,
    path: "/contact",
  },
  {
    element: <About />,
    path: "/about",
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
