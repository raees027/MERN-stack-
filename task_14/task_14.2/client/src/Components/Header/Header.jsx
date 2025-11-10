import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-section-left">
          <h1>
            <span className="logo">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ height: "32px", width: "32px", marginRight: "5px" }}
              />
            </span>
            Quick Cart
          </h1>
        </div>

        <div className="header-section-right">
          <div className="login-section">
            <h1>Login</h1>
            <span>
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{
                  height: "22px",
                  width: "22px",
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
