import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from "./components/NavScrollTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Work = lazy(() => import("./pages/Work"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));

const Contact = lazy(() => import("./pages/Contact"));

function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: "ease",
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <NavScrollTop>
        <Suspense fallback={<div />}>
          <Routes>
            <Route
              path={`${process.env.PUBLIC_URL + "/home"}`}
              element={<Home />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/about"}`}
              element={<About />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/job-search"}`}
              element={<Service />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/job-sectors"}`}
              element={<Work />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/sectors/:id"}`}
              element={<WorkDetails />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/blog"}`}
              element={<BlogGrid />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/contact"}`}
              element={<Contact />}
            />
          </Routes>
        </Suspense>
      </NavScrollTop>
    </Router>
  );
}

export default App;
