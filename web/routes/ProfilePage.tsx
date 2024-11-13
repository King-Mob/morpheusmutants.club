import { content } from "../../data/content";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import Header from "../components/Header";

export default function ProfilePage({}) {
  const { username } = useParams();

  console.log(content.users[username]);

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
