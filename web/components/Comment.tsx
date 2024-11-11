import Markdown from "react-markdown";

export default function Comment({ comment, dateTime }) {
  return (
    <div className="comment-container">
      <h3>{comment.title}</h3>
      <p className="datetime">{dateTime}</p>
      <div className="profile-container">
        <img className="profile-image" src={`./profile-${comment.user}.jpeg`} />
        <p>{comment.user}</p>
      </div>
      <div className="body-container">
        <Markdown>{comment.body}</Markdown>
      </div>
    </div>
  );
}
