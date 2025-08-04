import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import PostAd from '../pages/PostAd.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'post',
        element: <PostAd />
      }
    ]
  }
])

export default router 