import Markdown from "react-markdown";
import { useState } from "react";
import Comment from "./Comment";
import ImageUsername from "./ImageUsername";

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

  return (
    <div className="post-container">
      <h2>{post.title}</h2>
      <p className="datetime">{dateTime}</p>
      <ImageUsername user={post.user} />
      <div>
        <Markdown>{post.body}</Markdown>
      </div>
      <button onClick={toggleComments}>
        {commentsVisible ? "Hide" : "Show"} Comments
      </button>
      {commentsVisible && <div className="comments-container">{comments}</div>}
    </div>
  );
}
