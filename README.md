# algo-practice

Repository for practicing solving code challenges.

Each LeetCode problem marked Easy and not requiring a subscription (I think?) is represented in this repo.  

## Problem Files

Problem files are located in `./LeetCode/Easy`
Each problem file is named for the camelCased non-hyphenated version of the LeetCode url associated with the problem.

Each problem file contains:
- a code comment containing the source of the problem (the URL).
- a function signature
- an export of the function to be imported into the test file

The name of the function in the function signature of the file and the parameters given for the function signature are taken from the LeetCode problem page so that you should be able to easily copy your solution to the LeetCode website without having to change the name of the function.

## Test Files

Test files are located in `./LeetCode/Easy/tests`
Tests are built using the examples provided on LeetCode problems.  In order to test that your functions pass all of the test conditions, it is advised to then try your implementation on the LeetCode page associated with the problem.

All tests are currently set to be skipped.
In order to unskip a test, go to the test file and remove the ".todo" from the outer describe.

Example:

If you've written a function for `LeetCode/Easy/addBinary.js` and want to test that your function passes the examples provided, you would go into `LeetCode/Easy/tests/addBinary.test.js` and change `describe.todo("addBinary", () => { ... }` to `describe("addBinary", () => { ... }`

## Not Implemented

There are 23 problems that involved Linked Lists/Binary Trees that there wasn't an easy way to port test examples to.  For this reason, they have been moved into `LeetCode/Easy/todo` and `LeetCode/Easy/todo/tests` respectively.

## Setup Files
- [urls.text](./setup/urls.txt) is a list of problems marked Easy in Leetcode that don't require a subscription to view
- [crawler.js](./setup/crawler.js) uses `puppeteer` to navigate to each url in `urls.txt`, set the local_storage key `global_lang` to `Javascript` to ensure that the JavaScript version of the problem is loaded, wait for the page to load, and save the html file to the `out` directory
- [scraper.js](./setup/scraper.js) uses `jsdom` to pull relevant pieces of information from the html files and creates a problem file and test file for the problem file

**Note**: `puppeteer` and `jsdom` are necessary for using these setup files and have been removed from the `package.json` as they are no longer needed.  Should these files be needed for use in the future, `jsdom` and `puppeteer` will have to be reinstalled.

## To use repo
- Fork and clone
- Run npm install to install devDependencies (mocha and chai)
- Choose a problem
- Implement the functionality using the code signature provided
- Unskip tests for that problem by removing `.todo` in the describe of the test file
- From the root of the repo, type the command `npm run test`