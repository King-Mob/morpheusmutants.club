import catchLinks from "catch-links";
import { useNavigate } from "react-router-dom";
import { content } from "../../data/content";
import Header from "../components/Header";
import Post from "../components/Post";

export default function MainPage() {
  const navigate = useNavigate();

  catchLinks(window, function (href) {
    console.log(href);
    navigate(href);
  });

  const posts = [];

  for (const postDateTime in content.posts) {
    const post = content.posts[postDateTime];
    posts.push(<Post key={postDateTime} post={post} dateTime={postDateTime} />);
  }

  return (
    <div id="main-page-container">
      <Header />
      <div id="posts-container">{posts}</div>
    </div>
  );
}
