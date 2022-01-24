# kostaskoyias.github.io

## Purpose

This web-page aims to showcase my work & experience
on computer science over the years, allowing people to connect
with me on social media using direct links to all my accounts.

## How it works

This project is pretty dynamic, meaning that no resource, other than
the topic headers and the path to the resume PDF, is hard-coded.

Most information is retrieved from
the [GitHub Api](https://api.github.com), keeping project
names, description & links up to date at all times.
Current status and avatar are also fetched from Github and are therefore dynamic as well.

Projects are classified based on their topics list and sorted first by their
watchers count, starring those having at least 1
& then by their latest modification time, putting the most recently updated on
top of their corresponding topic list.

## How to run and develop

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to publish

First please set the source branch on Github pages manually to some branch other than the default.
This branch is meant to hold the static files (build output).
See the [Github docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for detailed instructions on this one.

1. Decide which branch is the main branch meant to be published.
2. After committing and pushing, run `./publish {{main_branch}} {{gh_pages_branch}}`, where branch names default to `master` and `gh-pages`
This will make a `{{gh_pages_branch}}` branch point to `{{main_branch}}`, check it out, build the app and push it to that branch
Note that the `{{gh_pages_branch}}` branch is the one we set as the source for out GH Pages website

Thanks for reading, make sure to
[check it out live](https://kostaskoyias.github.io).
