## Notes
Uses npx create-react-app, on the topic not of user experience but of *development; to contribute, other developers should have a good code editor like VSCode, iTerm, and be familiar with installing Git on macOS via Xcode Command Line Tools.  The great thing about Create React App is that for the sake of *code hygiene it performs npm install dependencies.  We can host on localhost :)!  After heroku auth:whoami, does heroku create.

Adds fun facts API, input number box, and refactors functional component to class component for *responsiveness.  Includes mouseDown function with this binding, which allows *proper documentation for the existence of the mouseDown function.

While using the link types noopener, the keyword for the rel attribute of the a href element, which instructs the browser to navigate to the target resource without granting the new browsing context access to the document that opened it, using noreferrer in order not to provide the Referer HTTP header, with target = "_blank" to open in a new tab, refactors the existing Create React App code so that the most recent fun fact rotates by using the className App-logo as its container div, which really helps with the user experience; users prefer *responsive, non-interfering designs which animate what matters.

Instead of using event listeners and the DOM, integrates swal with method chaining within which the axios GET request is made per the axios docs, which does error catching and handling to submit and return messages from the api.mathjs.org API, instead of modifying DOM elements when events' listeners are triggered on them, uses axios.get method chaining to handle server response in a .then/.catch/.then block which works with the promised response, and by the way the user and the soon-to-be event handler will work with user input!

Installs React Bootstrap to include React Bootstrap and Button from 'react-bootstrap/Button', styling button with type=submit to follow React Bootstrap guidelines, modeling button after react-bootstrap.github.io/components/buttons.  e.preventDefault is on the componentDidMount turned into async onSubmit(e) {... for which there's an event handler written in JSX!

Optimizes user input flexbox for mobile view @media only screen and (max-width: 600px) {... and fancifies button with moving CSS background, displays previous user input and API responses from Math.js with the setResponseData helper function transferred from _this_.  Includes non-typing equality check!  ::placeholder is colored:).  Every element of the styling is superbly done.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
