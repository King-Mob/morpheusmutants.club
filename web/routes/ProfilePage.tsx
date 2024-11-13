import { content } from "../../data/content";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import Header from "../components/Header";

export default function ProfilePage({}) {
  const { username } = useParams();

  return (
    <div>
      <Header />
      {content.users[username] ? (
        <>
          <h1>{username}</h1>
          <img src={`/profile-${username}.jpeg`} />
          <Markdown>{content.users[username].bio}</Markdown>
        </>
      ) : (
        <>
          <img src="/nightmare.jpeg" />
          <p>No profile found for this username</p>
        </>
      )}
    </div>
  );
}
