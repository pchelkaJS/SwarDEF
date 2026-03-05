import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import MainLayout from './layout/MainLayout/MainLayout'
import Feed from './pages/Feed/Feed'
import './index.css'
import SendReport from './pages/SendReport/SendReport'
import MainLayoutRus from './layout/MainLayoutRus/MainLayoutRus'
import FeedRu from './pages/FeedRu/FeedRu'
import SendReportRu from './pages/SendReportRu/SendReportRu'

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
  },
  {
    path: '/ru',
    element: <MainLayoutRus />,
    children:[
      {
        path: '/ru',
        element: <FeedRu />
      },
      {
        path: '/ru/sendReport',
        element: <SendReportRu />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)