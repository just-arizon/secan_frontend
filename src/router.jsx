import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import About from './pages/AboutUs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'coming-soon', element: <ComingSoon /> },
      { path: 'about', element: <About /> },
    ],
  },
])