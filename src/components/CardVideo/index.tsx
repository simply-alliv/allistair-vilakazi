import React, { FunctionComponent } from "react";
import "./index.css";

interface CardVideoProps {
  srcWebm: any;
  srcMp4: any;
}

const CardVideo: FunctionComponent<CardVideoProps> = (props) => {
  return (
    <div className="card-video flex flex__column">
      <video playsInline autoPlay loop>
        <source src={props.srcWebm} type="video/webm" />
        <source src={props.srcMp4} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};

export default CardVideo;
