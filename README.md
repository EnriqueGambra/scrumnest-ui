# Scrum Nest UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running Locally

Before you can run the ScrumNest UI locally, you will first need to deploy the ScrumNest API which can be found [here](https://github.com/brianseidl/scrumnest-api).

### Install Dependencies

You will also want to make sure that you have NPM and the Amplify CLI installed as well.

You can install the Amplify CLI via npm:

```bash
npm install -g @aws-amplify/cli
```

### Amplify

#### Initialize the Amplify Project

```bash
amplify init
```

Make sure that you choose `javascript` for the app type and `react` for the framework.

#### Add an Amplify Environment

```bash
amplify env add
```

Make sure that you choose `No` for using an existing environment. Also make sure to choose a unique name for the environment.

#### Connect Amplify to Your API

```bash
amplify add codegen --apiId <API_ID_HERE>
```

You want to use your API ID for your AWS AppSync API.

### Configure S3 File Upload Bucket

```bash
amplify import storage
```

Make sure you select the bucket that was created by the API. `XXX-scrumnest-files-dev`

#### Push Your Amplify Configuration

```bash
amplify push
```

### Start the Project

Once you have installed all of the dependences and configured your Amplify to your ScrumNest API stack, you are ready to bring up the UI locally.

```bash
npm start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
