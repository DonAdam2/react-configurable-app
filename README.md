### This app shows you how to create a configurable React app (controlled through an object from an API)

- You will be able to control the following:
  - Theme (background color, success color, danger color, text color and typography)
  - Views (components to show on each page)

## Prerequisites:

- nodeJS > 14.X.X or Docker

## Installing / Getting Started:

### Development (locally):

- Clone repo => `git clone git@github.com:react-custom-projects/webpack-react-boilerplate.git`
- `cd webpack-react-boilerplate`
- Install dependencies => `yarn install`
- Start the development server => `yarn start`

### Development (using Docker):

- Clone repo => `git clone git@github.com:react-custom-projects/webpack-react-boilerplate.git`
- `cd webpack-react-boilerplate`
- Install dependencies (required for prettier) => `yarn install`
- Start the development server => `docker-compose up --build`

## Configuring Prettier

This build relies on [Prettier formatter](https://prettier.io/) to enforce a code style. And [ESLint](https://eslint.org/) for identifying problematic patterns found in JavaScript code.

- Setting up prettier:

  1- You can find steps on how to set up prettier formatter with WebStorm/PhpStorm [here](https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher).

  Notes:

  - It's better to use the local `node_modules` version of prettier instead of a global one. This is to avoid version conflicts (in case the globally installed version does not match with the versions specified in `package.json`). So when setting up the file watcher when you follow the steps from the above link you can set `program` to `$ProjectFileDir$\node_modules\.bin\prettier` (warning this assumes that node_modules sits in the root of your project. This will need to change if your directory structure changes).
  - You will have to create two file watchers. One for JSX files and one for JS files. The webpack build tools are already configured to work with `eslint` and `prettier`. The only thing needed is the two file watchers.

  2- Follow the next steps to set up **prettier** and **eslint** on **_VS Code_**:

  - Install `prettier` plugin

  - Install `eslint` plugin

  - Open **_VS Code settings_** `CTRL + ,`:

    a- Search for `formatter` => check **Format on save**

    b- Search for `prettier` => add `.prettierrc` in **_Prettier: Config Path_** section && check **_Prettier: Require Config_**

  3- Please refer to other tutorials if you are using a different IDE.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
It will open [http://localhost:3000](http://localhost:3000) automatically in the browser to see your app.

All changes will be injected automatically without reloading the page.<br>

You will see in the console the following:

- All redux store related changes
- Any of the following errors:
  1. Linting errors.
  2. Code format errors (because of [prettier](https://prettier.io/))

### `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:serve`

Serves the app on `http://localhost:8080/` from the `dist` folder to check the production version.

**_Note:_** Use this script only if you ran the build script `yarn build`.

### `yarn analyze-bundle`

It allows you to analyze the bundle size.

### `yarn test:all`

It runs all test files.

### `yarn test:watch`

- It runs all unit test files in `/src` directory using watch mode.
- Will run all your tests once then again on every change of your source code

### `yarn test:coverage`

It runs test coverage.

### `yarn test:clear`

Clears test cache.

### `yarn generate` **_component_** || **_container_** || **_page_** || **_hook_** || **_service_** || **_reducer_**

- It creates a boilerplate for component, container, page, custom hook, service or reducer.
