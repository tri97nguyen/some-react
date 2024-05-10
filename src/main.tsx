import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import View from './pages/View/View.tsx'
import CreateOrder from './pages/CreateOrder/CreateOrder.tsx'
import Navbar from './Navbar.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <View />
  },
  {
    path: "/orders",
    element: <View />
  },
  {
    path: "/create-order",
    element: <CreateOrder />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <p>hello world</p>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
