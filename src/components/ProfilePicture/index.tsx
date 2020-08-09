import React, { FunctionComponent } from "react";
import "./index.css";
import profilePic from "../../assets/images/profile-picture.jpg";

interface ProfilePictureProps {
  isOpaque?: boolean;
}

const ProfilePicture: FunctionComponent<ProfilePictureProps> = (isOpaque) => {
  return (
    <img
      src={profilePic}
      alt="A profile of Allistair Vilakazi."
      className={isOpaque ? "opaque" : ""}
    />
  );
};

export default ProfilePicture;
