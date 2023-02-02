import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

// CSS File Here
import "swiper/css";
import "aos/dist/aos.css";
import "react-modal-video/scss/modal-video.scss";
import "./assets/scss/style.scss";

const container = document.getElementById("root");
const root = createRoot(container);
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
