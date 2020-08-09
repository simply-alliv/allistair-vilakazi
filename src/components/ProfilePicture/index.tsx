import React, { FunctionComponent } from "react";
import "./index.css";
import profilePic from "../../assets/images/profile-picture.jpg";

const ProfilePicture: FunctionComponent = () => {
  return <img src={profilePic} alt="A profile of Allistair Vilakazi." />;
};

export default ProfilePicture;
