import React, { FunctionComponent } from "react";
import "./index.css";

interface CardProps {
  width?: string;
  height?: string;
  href?: string;
  cardStyle?: "outlined" | "elevated";
  cardShape?: "flat" | "rounded";
  children?: React.ReactNode;
}

const Card: FunctionComponent<CardProps> = ({
  width = "auto",
  height = "auto",
  href = undefined,
  cardStyle = "elevated",
  cardShape = "rounded",
  children,
}) => {
  const style = {
    width,
    height,
  };

  const styleClass =
    cardStyle === "elevated" ? "card-elevated" : "card-outlined";

  const shapeClass = cardShape === "rounded" ? "card-rounded" : null;

  return (
    <React.Fragment>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={"card " + styleClass + " " + shapeClass}
          style={style}
        >
          {children}
        </a>
      ) : (
        <div className={"card " + styleClass + " " + shapeClass} style={style}>
          {children}
        </div>
      )}
    </React.Fragment>
  );
};

export default Card;
