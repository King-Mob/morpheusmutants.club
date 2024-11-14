const fsPromise = require("node:fs/promises");
const fs = require("node:fs");

const { readdir, readFile, writeFile, copyFile } = fsPromise;
const { existsSync } = fs;

const getPost = async (postFileLocation) => {
  const post = await readFile(postFileLocation, { encoding: "utf8" });

  const splitPost = post.split("\n");

  const title = splitPost[0].slice(2).trim();
  const user = splitPost[2].trim();
  const body = splitPost.slice(4).join("\n");

  return {
    title,
    user,
    body,
  };
};

const getPosts = async () => {
  const posts = {};

  const postsFolder = "./data/posts";

  const postDateTimes = await readdir(postsFolder);

  for (const postDateTime of postDateTimes) {
    const postFolder = `${postsFolder}/${postDateTime}`;

    const postFileLocation = `${postFolder}/post.md`;

    const { title, user, body } = await getPost(postFileLocation);

    posts[postDateTime] = {
      title,
      user,
      body,
      comments: {},
    };

    const commentsFolder = `${postFolder}/comments`;

    if (existsSync(commentsFolder)) {
      const commentDateTimes = await readdir(commentsFolder);

      for (const commentDateTime of commentDateTimes) {
        const commentFolder = `${commentsFolder}/${commentDateTime}`;

        const commentFileLocation = `${commentFolder}/comment.md`;

        const { title, user, body } = await getPost(commentFileLocation);

        posts[postDateTime].comments[commentDateTime] = {
          title,
          user,
          body,
        };
      }
    }
  }

  return posts;
};

const getUsers = async () => {
  const users = {};

  const usersFolder = "./data/users";

  const userNames = await readdir(usersFolder);

  for (const userName of userNames) {
    const userFolder = `${usersFolder}/${userName}`;
    const bioLocation = `${userFolder}/bio.md`;

    const bio = (await readFile(bioLocation, { encoding: "utf8" }))
      .split("\n")
      .slice(1)
      .join("")
      .trim();

    copyFile(`${userFolder}/profile.jpeg`, `./public/profile-${userName}.jpeg`);

    users[userName] = {
      bio,
    };
  }

  return users;
};

const build = async () => {
  const content = {
    posts: {},
    users: {},
  };

  const posts = await getPosts();

  content.posts = posts;

  const users = await getUsers();

  content.users = users;

  const opener = `export const content = \n`;

  writeFile("./data/content.ts", opener + JSON.stringify(content), {
    encoding: "utf8",
  });
};

build();
