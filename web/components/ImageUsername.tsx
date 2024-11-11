import { useState, useEffect } from "react";

const ImageUsername = ({ user }) => {
  const [userImage, setUserImage] = useState("anon");

  useEffect(() => {
    fetch(`./profile-${user}.jpeg`)
      .then((res) => res.blob())
      .then((blob) => {
        if (blob.type === "image/jpeg") setUserImage(user);
      });
  }, []);

  return (
    <div className="profile-container">
      <img className="profile-image" src={`./profile-${userImage}.jpeg`} />
      <p>{user}</p>
    </div>
  );
};

export default ImageUsername;
