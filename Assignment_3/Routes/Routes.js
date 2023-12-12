import { createBrowserRouter } from "react-router-dom";
// import About from "../pages/About";
// import Home from "../pages/Home";
// import Contact from "../pages/Contact";
import Header from "../components/Header";
import Error404 from "../pages/Error404";
import { Outlet } from "react-router-dom";
import Cart from "../pages/Cart";
import { Suspense, lazy } from "react";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const About = lazy(() => import("../pages/About"));

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={`Loading Home`}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={`Loading About`}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={`Loading Contact`}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRoutes;
