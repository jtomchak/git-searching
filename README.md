# Git Searching

[![Netlify Status](https://api.netlify.com/api/v1/badges/7fa21442-8dc8-4805-8d6d-5cd9e9047b76/deploy-status)](https://app.netlify.com/sites/git-searching/deploys)

- [x] I can search for users and
- [x] see a paginated list of results
- [x] I can navigate through the next and previous pages of the paginated results
- [x] I see the total count of search results
- I see notable information for each search result, such as the description, star/follower count, profile pictures, etc.
- I can select a search result and be taken to the applicable page on github.com API

These are the objectives of our Git Search Application.

## Getting Started

1. Clone the repo`git clone -b --single-branch starter https://github.com/jtomchak/git-searching.git && cd git-searching`
   - Why single-branch? The idea to clone the starter branch and work along with the sections. If you get stuck, you can always refer to the finished branch for that section on the repo itself. But you'll get far more out of it by working through it rather than just following along.
2. Install dependencies `yarn` or `npm i`
3. Run the app with `yarn start` or `npm start`
4. Testing with `yarn test` or `npm test`

## [01-First-Test](https://github.com/jtomchak/git-searching/tree/01-first-test)

- In order to confidently make changes to our application, we'll need some testing around it so we can quickly and regularly know not if, but when we've broken something.
- So where so we start? Somewhere small, and move on from there.
- HeroTitle using [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)

## [02-SearchInput-Test](https://github.com/jtomchak/git-searching/tree/02-search-input-test)

- Next Component up is our search component, a bit more involved than the last one, but again, start small and add to it.
- Test that the elements: label, input, and button are rendered accordingly.
- Then we can test the events of enable/disable the button, adding text to the field, and finally clicking submit on the button!
