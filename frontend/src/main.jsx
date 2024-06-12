import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AdminPannel from './components/AdminPannel.jsx'
import AddProduct from './components/AddProduct.jsx'
import ViewData from './components/ViewData.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<AdminPannel/>}/>
    <Route path='/addProduct' element={<AddProduct/>} />
    <Route path='/viewData/:id' element={<ViewData/>} />
    <Route path='/updateData/:id' element={<UpdateProduct/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
