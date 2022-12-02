# Webflow React Widget

Platform-agnostic micro-frontend that runs on any platform but specificaly build to be used with Webflow. Supports inline SVGs and isolated styles (using Emotion) that doesn't interfere with styles host website.

The goal is to provide minimalistic React runtime with small bundle size so that it doesn't affect SEO and page rank.

## Available scripts

The following scripts are available

### Install all dependencies

```bash
yarn install
```

### Development mode

Runs the app in the development mode.

```bash
yarn start
```

### Build

Builds the widget in the `dist` folder. Optionally, development/production variant can be specified which controls the Node environment.

Open `dist/index.html` to preview build version with production React.

```bash
yarn build
```

## Usage

```html
<! head -->
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
></script>

<! body -->
<div id="react-widget"></div>
<script src="bundle.iife.js"></script>
```

## Styles

Widget is styled using [Emotion](https://emotion.sh/docs/introduction) to ensure that the styles don't interact with the host website.

## Build process

Build it done by Vite. React and ReactDOM are excluded from the build and loaded via CDN. This allows using multiple micro-frontends on a page without having multiple React/ReactDOM instances.

## Directory structure

```bash
├── dist
│   ├── bundle.iife.js  <- to be used in Webflow
│   ├── index.html
│   ├── **/*.css
├── node_modules
├── public              <- 'Preview' site
├── src
│   ├── assets          <- images/SVGs/fonts/etc
│   ├── components
│   ├── lib
├── package.json
├── package-lock.json
└── .gitignore
```
