import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import About from "./pages/AboutUs";
import Awards from "./pages/Awards";
import Fellowship from "./pages/Fellowship";
import Events, { eventsLoader } from "./pages/Events";
import Mission from "./pages/about/Mission";
import Membership from "./pages/Membership";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      { path: "coming-soon", element: <ComingSoon /> },

      {
        path: "about",
        element: <About />,
        children: [
          { path: "executive-council", element: <ComingSoon /> },
          { path: "history", element: <ComingSoon /> },
          { path: "our-mission", element: <Mission /> },
        ],
      },

      {
        path: "membership",
        element: <Membership />,
        children: [
          { path: "categories", element: <ComingSoon /> },
          { path: "apply", element: <ComingSoon /> },
        ],
      },

      { path: "awards", element: <Awards /> },
      { path: "fellowship", element: <Fellowship /> },
      { path: "events", element: <Events />, loader: eventsLoader },
    ],
  },
]);
