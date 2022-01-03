#/bin/zsh

# Branch the source code of which is meant to be built and published
MAIN_BRANCH="${1-"master"}"
ORIGIN_MAIN_BRANCH="origin/$MAIN_BRANCH"

# Github pages source branch, see https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
# On this branch, we will build the JSX files of the main branch and commit the build folder(static files) to that branch
GH_PAGES_BRANCH=${2-"gh-pages"}

BUILD_FOLDER="build"

# Find out where the main branch points to
main_commit=$(git rev-parse --verify "$ORIGIN_MAIN_BRANCH" 2>/dev/null)
if [ $? -ne 0 ]; then
    echo "Could not locate branch '$ORIGIN_MAIN_BRANCH', please create it or use another branch"
    exit 1
fi

# Create or checkout the branch meant for publishing making it point to the main branch
git branch -f "$GH_PAGES_BRANCH" "$ORIGIN_MAIN_BRANCH"
git checkout "$GH_PAGES_BRANCH"

# Build project
echo " > Building project"
npm install &> /dev/null
npm run build &> /dev/null

# Commit the static files and push
echo " > Commiting changes"
git add . &> /dev/null
git add "$BUILD_FOLDER" -f &> /dev/null
git commit -m "Publishing commit $main_commit" &> /dev/null

echo " > Pushing changes"
git push --set-upstream origin HEAD --force &> /dev/null

git checkout "$MAIN_BRANCH"
echo "\n > All done, please make sure branch '$GH_PAGES_BRANCH' is set as the source branch in your Pages settings on Github for this repo"
