import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to="/">
      <header>
        <h1 id="title">Morpheus Mutants Club</h1>
        <p id="slogan">There's always more for us Mutants.</p>
      </header>
    </Link>
  );
}
