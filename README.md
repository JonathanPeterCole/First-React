# First React

## Quick Start

1. Install the npm packages  
  `npm install`

1. Build the application  
  `npm run build`

1. Run the application  
  `npm run start`

1. Open your browser and go to [http://localhost:3000/](http://localhost:3000/)

## Commands

* **Build**  
  Runs webpack to build the client-side Javascript.  
  `npm run build`  

* **Build Development**  
  Runs webpack to build the client-side Javascript with dev sourcemaps.  
  `npm run buildDev` 

* **Linting**  
  Runs ESLint to lint both the client and server-side code.  
  `npm run lint`

* **Linting Fix**  
  Runs ESLint with --fix to lint the code and attempt to automatically apply fixes.  
  `npm run lintFix`

* **Start**  
  Runs the application on port 3000.  
  `npm run start`


## Tools and Config

* **.editorconfig**  
  Sets editor settings for supported editors (Atom, VS Code, etc)

* **ES Lint**  
  Used for Javascript linting.  
  Configured with `.eslintrc.js` and `.eslintignore`.

* **Webpack**  
  Used for running build tasks.  
  Configured with `webpack.config.js`.

* **Babel**  
  JS compiler for client-side code.  
  Configured with `.babelrc`.
