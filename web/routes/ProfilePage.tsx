import { content } from "../../data/content";
import { Link, useParams, useNavigate } from "react-router-dom";
import catchLinks from "catch-links";
import Markdown from "react-markdown";
import Header from "../components/Header";

export default function ProfilePage({}) {
  const navigate = useNavigate();

  catchLinks(window, function (href) {
    console.log(href);
    navigate(href);
  });

  const { username } = useParams();

  return (
    <div>
      <Header />
      {content.users[username] ? (
        <>
          <h1>{username}</h1>
          <div className="profile-page-container">
            <img src={`/profile-${username}.jpeg`} />
            <Markdown>{content.users[username].bio}</Markdown>
          </div>
        </>
      ) : (
        <>
          <div className="error-message-container">
            <h1>No profile found for this username</h1>
            <img src="/nightmare.jpeg" />
            <Link to="/">
              <p>Back to main page</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
