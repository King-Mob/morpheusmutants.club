import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NoMatch() {
  return (
    <div id="no-match-container">
      <Header />
      <h1>No page found at that address</h1>
      <img src="/nightmare.jpeg" />
      <Link to="/">
        <p>back to main page</p>
      </Link>
    </div>
  );
}
