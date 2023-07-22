import { FunctionComponent } from "react";
import Header from "../components/Header";
import Columns from "../components/Columns";
import Footer from "../components/Footer";
import "./LandingPage.css";
const LandingPage: FunctionComponent = () => {
  return (
    <div className="frontendpage">
      <Header />
      <div className="home-section">
        <Columns />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
