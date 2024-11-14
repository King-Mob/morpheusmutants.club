# Morpheus Mutants Club Contribution Guide

The project is a React typescript web-app using Parcel for building. It's the narrative blog of a community of seekers in the year 2052 who are fans of the elusive figures known as dreamwalkers.

## Adding Content

The project uses markdown files and folder directories for the site data. By adding new directories and files, the site data changes.

### Making New Posts

1. Open the folder `data/posts`
2. Create a new folder with the name being the date-time of your posts using the format `YYYY.MM.DD.hhmm` e.g. `2000.12.25.1526` would be Christmas Day in the year 2000 at 3:26pm
3. Create a file called `post.md` with the title of your post at the top, then the username of the poster as the third line, and then on line 5 the body of the post. If the username has a corresponding folder in the users folder then their name will link to a profile and their picture will appear next to the post. Example post format:

```markdown
# This is an example post

ExampleUser

Hello, this is the body of the post, this is where the content will actually be.

Use as many lines as you want
```

### Making Comments

Making comments is very similar to making posts.

1. Start in the folder of the post
2. Either create or open the `/comments` folder
3. Make a folder with the date-time of your comment
4. Make a file called `comment.md` and post in it as you would a new post with the username as the third line

### Making Users

And making users is similar to.

1. Open `/data/users`
2. Create a new folder with the username you are creating
3. Create a file called `bio.md` with the title as `Bio` and the content as their user-defined biography
4. Add a picture in the folder, called `profile.jpeg`.

### Adding Links to Documents

1. Drop your document in the `/public` folder
2. Then format the link like so: `[this is the link text](/file.pdf)`

## Seeing your new content

If you want you can just drag new files into the github folder structure and make a new commit. This is simple for you in terms of installing and setting up the project, but you'll have to wait a minute or two to see what your changes look like on the site while it builds and release.

Long term, having a version running locally then making a pull request with your changes is going to be a better experience for everyone.

Contact your local neighbourhood web developer to get a lesson in running the project on your own machine.
