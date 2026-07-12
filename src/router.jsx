import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import About from './pages/AboutUs'
import Awards from './pages/Awards'
import Fellowship from './pages/Fellowship'
import Events, { eventsLoader } from './pages/Events' 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'coming-soon', element: <ComingSoon /> },
      { path: 'about', element: <About /> },
      { path: 'awards', element: <Awards /> },
      { path: 'fellowship', element: <Fellowship /> },
      { path: 'events', element: <Events />, loader: eventsLoader  },
    ],
  },
])