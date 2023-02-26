import { useEffect, Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from "./components/NavScrollTop";
import data from "./data//blog/BlogClassic.json";
import LoginPage from "./pages/LoginPage.jsx";
import { RequireAuth } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import { Navigate } from "react-router-dom";

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

  const [loginStatus, setLoginStatus] = useState(false);
  const [userSignedIn, setUserSignedIn] = useState(
    localStorage.getItem("authState")
  );
  const [userType, setUserType] = useState("admin");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [expiresIn, setExpiresIn] = useState(localStorage.getItem("expiresIn"));
  const [tokenType, setTokenType] = useState(localStorage.getItem("tokenType"));
  const [authState, setAuthState] = useState(localStorage.getItem("authState"));

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("expiresIn", expiresIn);
    localStorage.setItem("tokenType", tokenType);
    localStorage.setItem("authState", authState);
  }, [token, expiresIn, tokenType, authState]);

  const userAuthenticated = async () => {
    const res = await fetch("http://localhost:8000/auth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    if (data.message !== "authenticated") {
      setLoginStatus(false);
      localStorage.clear();
    } else {
      setLoginStatus(true);
      setUserSignedIn(localStorage.getItem("authState"));
    }
  };
  useEffect(() => {
    userAuthenticated();
  }, []);

  return (
    <Router>
      <NavScrollTop>
        <Suspense fallback={<div />}>
          <Routes>
            <Route
              path={`${process.env.PUBLIC_URL + "/"}`}
              element={
                <Home
                  userType={userType}
                  authState={authState}
                  loginStatus={loginStatus}
                />
              }
            />

            <Route
              path={`${process.env.PUBLIC_URL + "/about"}`}
              element={
                <About authState={authState} loginStatus={loginStatus} />
              }
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/job-search"}`}
              element={
                <Service authState={authState} loginStatus={loginStatus} />
              }
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/job-sectors"}`}
              element={<Work authState={authState} loginStatus={loginStatus} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/work-details/:id"}`}
              element={
                <WorkDetails authState={authState} loginStatus={loginStatus} />
              }
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/blog"}`}
              element={
                <BlogGrid authState={authState} loginStatus={loginStatus} />
              }
            />

            <Route
              path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
              element={
                <BlogDetails authState={authState} loginStatus={loginStatus} />
              }
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/contact"}`}
              element={
                <Contact authState={authState} loginStatus={loginStatus} />
              }
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/login"}`}
              element={
                <LoginPage
                  setUserSignedIn={setUserSignedIn}
                  setLoginStatus={setLoginStatus}
                  setToken={setToken}
                  setExpiresIn={setExpiresIn}
                  setTokenType={setTokenType}
                  setAuthState={setAuthState}
                  setUserType={setUserType}
                />
              }
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/signup"}`}
              element={<Signup />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/dashboard"}`}
              element={
                userType === "admin" ? (
                  <Dashboard />
                ) : (
                  <Home
                    userType={userType}
                    authState={authState}
                    loginStatus={loginStatus}
                  />
                )
              }
            />
          </Routes>
        </Suspense>
      </NavScrollTop>
    </Router>
  );
}

export default App;
