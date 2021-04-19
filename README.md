# vanilla-js-movierama

## 1. Intro

This project is an SPA that has no dependencies to any library or framework. It was built solely with vanilla JavaScript.

### Development Environment

[Webpack](https://webpack.js.org/) `v.5.x.x` was used to bundle the app and be able to utilize ES6 Modules along with [Babel](https://babeljs.io/) `v.7.x.x` transpiler.

The node version is `v12.13.0`, and the package manager is npm `v6.12.0`

### Structure

The approach that followed is based on Module Pattern and for the component architecture the Object Literal syntax.

### Code Style and Formatting

`eslint` along with `airbnb-base` and `prettier` have been used.

## 2. Running the App

### Install Dependencies

Run `npm install` to install package.json dependencies.

### Start Development Server

Run `npm run serve` for a dev server. Navigate to `http://localhost:8080/`. You will need to reload the page for changes to take effect.

### Linter

Run `npm run lint` to automatically fix errors throughout the project files.

### Formatter

Run `npm run prettier` to format all js and scss files throughout the app.

### Build

Run `npm run build` to build the project.

## 3. Missing Parts

Things that I would improve / add if I had more time to finish the project:

- Tests - **I know it is very important!**
- Search movies functionality with debounce to eliminate API calls
- View Details accordion functionality to display hidden info about each movie
- Loading indicator for infinite scroll
- Handle server errors on UI (e.g display a user-friendly alert)
- Improve UI for the movies has no description to display
- Trim long descriptions to have consistency between the info that gets displayed on movie cards
