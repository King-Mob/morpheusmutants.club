import { content } from "../../data/content";
import { Link, useParams, useNavigate } from "react-router-dom";
import catchLinks from "catch-links";
import Markdown from "react-markdown";
import Header from "../components/Header";

export default function ProfilePage({}) {
  const navigate = useNavigate();

  catchLinks(window, function (href) {
    navigate(href);
  });

  const { username } = useParams();

  const postsByUser = [];
  const commentsByUser = [];

  for (const postTime in content.posts) {
    const post = content.posts[postTime];
    post.dateTime = postTime;
    if (post.user === username) postsByUser.push(post);

    const comments = content.posts[postTime].comments;

    for (const commentTime in comments) {
      const comment = comments[commentTime];
      comment.dateTime = commentTime;
      comment.postDateTime = postTime;
      if (comment.user === username) commentsByUser.push(comment);
    }
  }

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
          <h2>Posts by {username}</h2>
          {postsByUser.map((post) => (
            <Link to={`/#post-${post.dateTime.split(".").join("")}`}>
              <h3>{post.title}</h3>
            </Link>
          ))}
          <h2>Comments by {username}</h2>
          {commentsByUser.map((comment) => (
            <Link
              to={`/#comment-${comment.dateTime
                .split(".")
                .join("")}-post-${comment.postDateTime.split(".").join("")}`}
            >
              <h3>{comment.title}</h3>
            </Link>
          ))}
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
