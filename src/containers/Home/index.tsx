import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";
import ProfilePicture from "../../components/ProfilePicture";
import "./index.css";

interface HomeProps {
  activeRoute: string;
}

const Home: FunctionComponent<HomeProps> = ({ activeRoute }) => {
  return (
    <CSSTransition in={activeRoute === "/"} timeout={300} classNames="home">
      <div className="home background-dark">
        <div className="hero-image flex flex__justify-content--center">
          <ProfilePicture />
        </div>
        <div className="hero-text">
          <div className="hero-text__content">
            <h1>
              <span>I</span>
              <span className="emphasis">'</span>
              <span>M</span>
            </h1>
            <h1>ALLISTAIR</h1>
            <h1>
              <span>VILAKAZI</span>
              <span className="emphasis">.</span>
            </h1>
            <p>
              Dedicated Software Developer. Live in the future. Big fan of the
              Jawwas #Uthini!
            </p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Home;
