import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import MainLayout from './layout/MainLayout/MainLayout'
import Feed from './pages/Feed/Feed'
import './index.css'
import SendReport from './pages/SendReport/SendReport'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path: '/',
        element: <Feed />
      },
      {
        path: '/sendReport',
        element: <SendReport />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)