import Markdown from "react-markdown";
import ImageUsername from "./ImageUsername";
import DateTime from "./DateTime";

export default function Comment({ comment, dateTime }) {
  return (
    <div className="comment-container">
      <h3>{comment.title}</h3>
      <DateTime dateTime={dateTime} />
      <ImageUsername user={comment.user} />
      <div className="body-container">
        <Markdown>{comment.body}</Markdown>
      </div>
    </div>
  );
}
