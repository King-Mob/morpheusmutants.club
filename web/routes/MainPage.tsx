import { content } from "../../data/content";
import Header from "../components/Header";
import Post from "../components/Post";

export default function MainPage() {
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
