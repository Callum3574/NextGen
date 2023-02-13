import { useEffect, Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from "./components/NavScrollTop";
import data from "./data//blog/BlogClassic.json";
import LoginPage from "./pages/LoginPage.jsx";
import { RequireAuth } from "react-auth-kit";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Work = lazy(() => import("./pages/Work"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Signup = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/LoginPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

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

  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <Router>
      <NavScrollTop>
        <Suspense fallback={<div />}>
          <Routes>
            <Route
              path={`${process.env.PUBLIC_URL + "/"}`}
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
              path={`${process.env.PUBLIC_URL + "/work-details/:id"}`}
              element={<WorkDetails />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/blog"}`}
              element={<BlogGrid />}
            />

            <Route
              path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
              element={<BlogDetails />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/contact"}`}
              element={<Contact />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/login"}`}
              element={<LoginPage />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/signup"}`}
              element={<Signup />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/dashboard"}`}
              element={
                <RequireAuth loginPath="/login">
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Routes>
        </Suspense>
      </NavScrollTop>
    </Router>
  );
}

export default App;
