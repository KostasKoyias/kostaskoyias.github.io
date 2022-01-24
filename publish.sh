#!/bin/zsh

# Branch the source code of which is meant to be built and published
MAIN_BRANCH="${1-"master"}"
ORIGIN_MAIN_BRANCH="origin/$MAIN_BRANCH"

# Github pages source branch, see https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
# On this branch, we will build the JSX files of the main branch and commit the build folder(static files) to that branch
GH_PAGES_BRANCH=${2-"gh-pages"}

BUILD_FOLDER="build"

# Find out where the main branch points to
main_commit=$(git rev-parse --verify "$ORIGIN_MAIN_BRANCH" 2>/dev/null)
if [ -z "$main_commit" ]; then
    echo "Could not locate branch '$ORIGIN_MAIN_BRANCH', please create it or use another branch"
    exit 1
fi

# Create or checkout the branch meant for publishing making it point to the main branch
git branch -f "$GH_PAGES_BRANCH" "$ORIGIN_MAIN_BRANCH"
if ! command git checkout "$GH_PAGES_BRANCH"
then
  exit 1
fi

# Build project
echo " > Building project"
npm run build &> /dev/null

# Commit the static files and push
echo " > Committing changes"
git add . &> /dev/null
git add "$BUILD_FOLDER" -f &> /dev/null
git commit -m "Publishing commit $main_commit" &> /dev/null

# Push the build folder
echo " > Pushing changes"
git push origin "$(git subtree split --prefix $BUILD_FOLDER HEAD)":"$GH_PAGES_BRANCH" --force

git checkout "$MAIN_BRANCH"
printf "\n > All done, please make sure branch '%s' is set as the source branch in your Pages settings on Github for this repo\n" "$GH_PAGES_BRANCH"
