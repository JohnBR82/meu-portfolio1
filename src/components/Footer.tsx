import { FunctionComponent, useCallback } from "react";
import "./Footer.css";
const Footer: FunctionComponent = () => {
  const onLinkTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='frame2AboutContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='frame3ServicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkText2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='frame4ContactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="footer">
      <div className="columns1">
        <div className="column">
          <div className="logo-wrapper">
            <b className="gabriel1">{`Gabriel `}</b>
          </div>
        </div>
        <div className="small-columns">
          <div className="column1">
            <div className="content">
              <b className="recursos">Recursos</b>
              <div className="footer-links">
                <div className="link" onClick={onLinkTextClick}>
                  Sobre
                </div>
                <div className="link" onClick={onLinkText1Click}>
                  Meus Serviços
                </div>
                <div className="link" onClick={onLinkText2Click}>
                  Contato
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="text">Copyright © 2023 Gabriel</div>
      </div>
    </div>
  );
};

export default Footer;
