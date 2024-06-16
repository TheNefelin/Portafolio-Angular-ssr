# Portafolio Angular ssr v3.0

### Install angular framework 
```
npm install -g @angular/cli

ng serve --open
```

### Dependency
1. [Tailwind css](https://tailwindcss.com/)
```
npm install -D tailwindcss
npx tailwindcss init
```
* Config tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
* Config styles.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
2. [DaisyUI](https://daisyui.com/)
```
npm i -D daisyui@latest
```
* Config tailwind.config.js
```
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}
```
### Some Commands
```
ng g c components/navbar
ng g s services/data
ng g i interfaces/projects
ng g environments

ng s
```

<br>
<hr>

# PortafolioAngularSsr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
