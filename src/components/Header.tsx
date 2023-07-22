import { FunctionComponent, useCallback } from "react";
import "./Header.css";
const Header: FunctionComponent = () => {
  const onNavbarLinkContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='frame2AboutContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavbarLinkContainer2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='frame3ServicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavbarLinkContainer3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='frame4ContactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="navbar-menu">
      <div className="navbarcontainer">
        <div className="navbar-content">
          <div className="navbar-brand">
            <b className="gabriel"><a href="https://www.linkedin.com/in/gabrielfront/">{`Gabriel `}</a></b>
          </div>
          <div className="navbar-menu1">
            <div className="navbar-link">
              <div className="gabriel">Home</div>
            </div>
            <div className="navbar-link1" onClick={onNavbarLinkContainer1Click}>
              <div className="sobre">Sobre</div>
            </div>
            <div className="navbar-link1" onClick={onNavbarLinkContainer2Click}>
              <div className="sobre">Meus Serviços</div>
            </div>
            <div className="navbar-link1" onClick={onNavbarLinkContainer3Click}>
              <div className="sobre">Contato</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
