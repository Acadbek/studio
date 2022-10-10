import React from "react";
import useId from "../hooks/useID";

const HomePage = React.lazy(() => import("../pages/home"));
const AboutPage = React.lazy(() => import("../pages/about"));
const CreativePage = React.lazy(() => import("../pages/creative"));
const EventsPage = React.lazy(() => import("../pages/events"));
const HelpPage = React.lazy(() => import("../pages/helpPage"));
const SpacesPage = React.lazy(() => import("../pages/spacesPages"));

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <AboutPage />
      </React.Suspense>
    ),
    title: "About",
    path: "/about",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <SpacesPage />
      </React.Suspense>
    ),
    title: "Spaces",
    path: "/spaces",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <CreativePage />
      </React.Suspense>
    ),
    title: "Creative",
    path: "/creative",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <EventsPage />
      </React.Suspense>
    ),
    title: "Events",
    path: "/events",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HelpPage />
      </React.Suspense>
    ),
    title: "Help",
    path: "/help",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Generic Sign In</h1>,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Generic Sign Up</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
