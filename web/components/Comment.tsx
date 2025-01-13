import Markdown from "react-markdown";
import ImageUsername from "./ImageUsername";

export default function Comment({ comment, dateTime }) {
  return (
    <div className="comment-container">
      <h3 id={`comment-${dateTime.split(".").join("")}`}>{comment.title}</h3>
      <p className="datetime">{dateTime}</p>
      <ImageUsername user={comment.user} />
      <div className="body-container">
        <Markdown>{comment.body}</Markdown>
      </div>
    </div>
  );
}
