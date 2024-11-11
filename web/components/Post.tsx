import Markdown from "react-markdown";
import { useState } from "react";
import Comment from "./Comment";

export default function Post({ post, dateTime }) {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const comments = [];

  for (const commentDateTime in post.comments) {
    const comment = post.comments[commentDateTime];
    comments.push(
      <Comment
        key={commentDateTime}
        comment={comment}
        dateTime={commentDateTime}
      />
    );
  }

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible);
  };

  console.log(post.body);

  return (
    <div className="post-container">
      <h2>{post.title}</h2>
      <p className="datetime">{dateTime}</p>
      <div className="profile-container">
        <img className="profile-image" src={`./profile-${post.user}.jpeg`} />
        <p>{post.user}</p>
      </div>
      <div>
        <Markdown>{post.body.replaceAll("\n", "\n&nbsp;")}</Markdown>
      </div>
      <button onClick={toggleComments}>
        {commentsVisible ? "Hide" : "Show"} Comments
      </button>
      {commentsVisible && <div className="comments-container">{comments}</div>}
    </div>
  );
}
