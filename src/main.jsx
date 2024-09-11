import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import EmployeeList from './components/EmployeeList.jsx'
import EmployeeForm from './components/EmployeeForm.jsx'
import EmployDetails from './components/EmployDetails.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout />,
    children : [
      {
        path : '',
        element: <App />,
        children : [
          {
            path : '',
            element: <EmployeeList />
          },
          {
            path : '/employee_form',
            element: <EmployeeForm />
          },
          {
            path : '/employee_details',
            element : <EmployDetails />
          }
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
