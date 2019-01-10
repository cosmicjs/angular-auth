<img src="https://cosmic-s3.imgix.net/918b3000-1517-11e9-b639-ff9ababa68ba-angular.jpg?w=1200" width="600" />

# Angular Auth
Authentication app powered by Angular and [Cosmic JS](https://cosmicjs.com). [Read about how it was built](https://cosmicjs.com/articles/how-to-build-an-authentication-app-using-angular-6-and-cosmic-js-jqe0nsg0).

### [View the demo](https://cosmicjs.com/apps/angular-authentication-app)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

# Get Started

## Running server:

```
git clone https://github.com/a9kitkumar/angular_cosmicjs_auth
cd angular_cosmicjs_auth
npm install
COSMIC_BUCKET=your-bucket-slug COSMIC_READ_KEY=your-read-key COSMIC_WRITE_KEY=your-write-key npm run build
npm start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Screenshots
<img src="https://cosmic-s3.imgix.net/cedfb7f0-1517-11e9-ac3b-29773f4ac49e-angular-auth-1.png?w=1200" width="600" />
<img src="https://cosmic-s3.imgix.net/d2a09080-1517-11e9-ac3b-29773f4ac49e-angular-auth-2.png?w=1200" width="600" />

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Import Bucket
```
You can download bucket.json file from this repo and import it to your Cosmic JS bucket. Follow the following steps:
Login to Cosmic JS account
Select your default bucket
Goto Settings > Import/Export and click "Add import file", then choose downloaded "bucket.json" file

```
