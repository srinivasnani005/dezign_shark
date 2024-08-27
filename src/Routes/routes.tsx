import { createBrowserRouter, Navigate } from "react-router-dom";
import { Dashboard, NotFound, About, Gallery, ContactUs, Blog, GraphicDesigning, WebDevelopment, Branding, SEO, SMM, PPC, CardData, DigitalMarketing } from "../Pages/Exports/Exports";
import Layout from '../Layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path : "/services/digital-marketing",
        element : <DigitalMarketing />
      },
      {
        path: "/services/digital-marketing/seo",
        element: <SEO />,
      },
      {
        path: "/services/digital-marketing/smm",
        element: <SMM />,
      },
      {
        path: "/services/digital-marketing/ppc",
        element: <PPC />,
      },
      {
        path: "/services/graphic-designing",
        element: <GraphicDesigning />,
      },
      {
        path: "/services/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "/services/branding",
        element: <Branding />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/insights/:id",
        element: <CardData />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
