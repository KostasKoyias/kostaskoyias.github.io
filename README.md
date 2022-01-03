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

1. Please run `npm install` for all dependencies to be installed
2. Then, `npm run build` to build the project, converting JSX to what a browser can understand
3. Finally, please run `npm start` for the application to start

To develop, replace the 2 very last steps with `npm run dev`.  
This is both running a tiny server at port 3000 and watching for any code changes to be compiled.

## How to publish

First please set the source branch in Github pages manually some branch other than the default.
This branch is meant to hold the static files (build output).
See the [Github docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for detailed instructions on this one.

1. Decide which branch is the main branch meant to be published. All javascript code goes into the `js` directory
2. After commiting and pushing, run `./publish {{main_branch}} {{gh_pages_branch}}`, where branch names default to `master` and `gh-pages`
This will make a `{{gh_pages_branch}}` branch point to `{{main_branch}}`, check it out, build the JS files and push the output to that branch
Note that the `{{gh_pages_branch}}` branch is the one we set as the source for out GH Pages website

Thanks for reading, make sure to
[check it out live](https://kostaskoyias.github.io).
