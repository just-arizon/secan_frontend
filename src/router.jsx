import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import About from "./pages/AboutUs";
import Events from "./pages/Events";
import Mission from "./pages/about/Mission";
import Membership from "./pages/Membership";
import Publications from "./pages/Publications";
import FellowshipAwards from "./pages/FellowshipAwards";
import Upcoming, { eventsLoader }  from "./pages/events/Upcoming";
import Fellowship from "./pages/awards-and-fellowship/Fellowship";
import Awards from "./pages/awards-and-fellowship/Awards";
import Resources from "./pages/Resources";


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

       {
        path: "events",
        element: <Events />,
        children: [
          { path: "upcoming-events", element: <Upcoming />, loader: eventsLoader  },
          { path: "past-events", element: <ComingSoon /> },
        ],
      },
        {
        path: "publication",
        element: <Publications />,
        children: [
          { path: "jeca-journal", element: <ComingSoon /> },
          { path: "newsletter", element: <ComingSoon /> },
          { path: "position-statements", element: <ComingSoon /> },
        ],
      },

        {
        path: "fellowship-and-awards",
        element: <FellowshipAwards />,
        children: [
          { path: "fellowship", element: <Fellowship /> },
          { path: "awards", element: <Awards /> },

        ],
      },
        {
        path: "resources",
        element: <Resources />,
        children: [
          { path: "member-directory", element: <ComingSoon /> },
          { path: "faq", element: <ComingSoon /> },

        ],
      },
        {
        path: "career-center",
        element: <ComingSoon />,
      },

    ],
  },
]);
