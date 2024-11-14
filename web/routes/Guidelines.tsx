import Markdown from "react-markdown";
import Header from "../components/Header";

const guidelines = `
# Morpheus Mutants Club Guidelines

The guidelines are here to protect the club. Dreamwalking is a restricted activity by law. We are here to celebrate the dreamwalkers we enjoy the exploits of, not to share information about becoming a walker ourselves.

It is against the rules to:

- Post links to resi mod sites
- Ask for links to resi mod sites
- Post instructions on how to achieve compus somnium
`;

export default function Guidelines() {
  return (
    <div>
      <Header />
      <Markdown>{guidelines}</Markdown>
    </div>
  );
}
