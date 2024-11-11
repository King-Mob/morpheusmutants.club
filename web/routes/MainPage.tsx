import { content } from "../../data/content";
import Post from "../components/Post";

export default function MainPage() {
  const posts = [];

  for (const postDateTime in content.posts) {
    const post = content.posts[postDateTime];
    posts.push(<Post key={postDateTime} post={post} dateTime={postDateTime} />);
  }

  return (
    <div id="main-page-container">
      <h1 id="title">Morpheus Mutants Club</h1>
      <p id="slogan">There's always more for us Mutants.</p>
      <div id="posts-container">{posts}</div>
    </div>
  );
}
