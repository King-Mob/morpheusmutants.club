import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/profile/${user}`}>
        <img className="profile-image" src={`./profile-${userImage}.jpeg`} />
      </Link>
      <Link to={`/profile/${user}`}>
        <p>{user}</p>
      </Link>
    </div>
  );
};

export default ImageUsername;
