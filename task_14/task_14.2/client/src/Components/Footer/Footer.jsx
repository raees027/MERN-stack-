import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-cards">
          <div className="footer-section-contact">
            <p>Questions? Call 1-844-505-2993</p>
          </div>
          <div className="footer-menu-cards">
            <div className="footer-menu">
              <div className="footer-menu-1">
                <p>FAQ</p>
                <p>Cookie Preferences</p>
              </div>
              <div className="footer-menu-2">
                <p>Help Center</p>
                <p>Corporate Information</p>
              </div>
              <div className="footer-menu-3">
                <p>Terms of Use</p>
                <p>Privacy</p>
              </div>
            </div>
            <div className="footer-icons">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ height: "24px", width: "24px" }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ height: "24px", width: "24px" }}
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{ height: "24px", width: "24px" }}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ height: "24px", width: "24px" }}
              />
            </div>
          </div>
          {/* <div className="footer-language-container">
            <div className="footer-section-language">
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ height: "15px", width: "15px" }}
              />
              <p>English</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ height: "12px", width: "12px" }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
