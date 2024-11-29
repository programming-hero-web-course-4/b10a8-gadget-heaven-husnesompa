import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';
import ProductDetail from './components/ProductDetail/ProductDetail';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/productsData.json')
      },
      // {
      //   path: '/',
      //   element: <Home></Home>,
      //   loader: () => fetch('/productsData.json')
      // },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/productsData.json')
      },
      {
        path: 'products/:productId',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('/productsData.json')
      
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)