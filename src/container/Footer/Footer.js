import React from "react";
import { Link } from "react-router-dom";
import FooterLinkItem from "../../components/Footer/FooterLinkItem.jsx";
import Logo from "../../components/logo/Logo";
import FooterData from "../../data/Footer/footerItem.json";

const Footer = () => {
  return (
    <div className="footer-section section footer-bg-color">
      <div className="container">
        <div className="row mb-lg-14 mb-md-10 mb-6">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/footer-logo.png`}
                />
              </div>
              <div className="footer-widget-content">
                <div className="content">
                  <p>
                    <Link to={process.env.PUBLIC_URL + "/"}>0161 5377 978</Link>
                  </p>
                  <p>
                    <a href="mailto:hello@focus-find.co.uk">
                      hello@focus-find.co.uk
                    </a>
                  </p>
                </div>
                <div className="footer-social-inline">
                  {/* <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a> */}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/focus-find"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  {/* <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {FooterData &&
            FooterData.map((single, key) => {
              return (
                <div
                  key={key}
                  className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6"
                >
                  <FooterLinkItem data={single} key={key} />
                </div>
              );
            })}
        </div>

        <div className="row">
          <div className="col">
            {/* <p className="copyright">&copy; {new Date().getFullYear()} <strong>Exomac</strong> Made with <i className="fas fa-heart text-danger"></i> by <a href="#"><strong>HasThemes</strong></a>.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
