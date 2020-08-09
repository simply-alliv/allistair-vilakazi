import React, { FunctionComponent } from "react";
import "./index.css";
import ProfilePicture from "../../components/ProfilePicture";

const Home: FunctionComponent = () => {
  return (
    <div className="home background-dark">
      <div className="hero-image flex flex__justify-content--center">
        <ProfilePicture />
      </div>
      <div className="hero-text flex flex__column flex flex__align-items--center">
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
  );
};

export default Home;
