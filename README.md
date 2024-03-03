# Testing with Jest - ES6 class mocks

## Navigations

[Testing-with-Jest](#Testing-with-Jest)

- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Startup Guide](#project-startup-guide)
  - [Installation](#installation)
  - [Testing](#testing)
- [Resources](#resources)

## Folder Structure

- /src
  - db - (Database/models layer)
    - redis.ts
  - tests - Test cases
    - Company.test.ts
    - Employee.test.ts
  - Company.ts
  - Employee.ts

## Prerequisites

**Node 18.14.1**

## Startup Guide

- Clone the repo and
- Install the dependencies to setup your sustem to run the tests
  ```
      yarn install
  ```
- Checkout the respective branch as you follow along the article

### Testing

1. Test single file

   ```
      yarn test <regex> Or path to file

      e.g To test Company file tests
      yarn test /Company

   ```

2. Test entire test suites
   ```
      yarn test
   ```

## Resources

- [ES6 class mocks in Jest](https://jestjs.io/docs/es6-class-mocks)
