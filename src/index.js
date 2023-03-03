import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-auth-kit";
import "swiper/css";
import "aos/dist/aos.css";
import "react-modal-video/scss/modal-video.scss";
import "./assets/scss/style.scss";

const container = document.getElementById("root");
const root = createRoot(container);
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
root.render(
  <AuthProvider
    authType="cookie"
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
  >
    <App />
  </AuthProvider>
);
