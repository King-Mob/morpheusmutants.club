import catchLinks from "catch-links";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { content } from "../../data/content";
import Header from "../components/Header";
import Post from "../components/Post";

export default function MainPage() {
  const navigate = useNavigate();

  catchLinks(window, function (href) {
    navigate(href);
  });

  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID from the fragment identifier
    if (location.hash) {
      let query = location.hash;
      if (location.hash.includes("comment")) {
        const postButtonId = "#" + location.hash.slice(22) + "-button";
        const postButton = document.querySelector(
          postButtonId
        ) as HTMLButtonElement;
        postButton.click();
        const commentId = location.hash.slice(0, 21);
        console.log(commentId);
        query = commentId;
      }
      const element = document.querySelector(query);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

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
