## Overview

This is a simple mobile app that uses Smarkets api to display a list of sporting events and specific details of each event in the detail screen.

## Technologies used

1. React Native: for building powerful apps for android and ios platforms
2. React Hooks: used with functional components.
3. Redux: for state management across the app.
4. jest and @testing-library/react-native: for unit tests.
5. Typescript: A superset of Javascript
6. Eslint for linting.

## Design Pattern used

I used an architecture similar to MVP (model-view-presenter) architecture.
the model had to do with the data which was in the redux store, the view was the file that has all the jsx properties and the logic had all the functions/methods i.e.
src/screens/Events -> Events.tsx, src/screens/Events -> EventLogic.ts

## Tests

The test files are found in src/screens/Events -> Events.test.tsx and, src/screens/EventDetails -> EventDetails.test.tsx respectively. To run the tests, after cloning the project, and running 'yarn install' to install the dependencies, run 'npx pod-install' to install the pod dependencies for iOS. run 'yarn test' => to run the unit tests.
run npx react-native run-ios => to run it on your iOS simulator, or you can run it directly from your xcode.

## Preview

A screen recording on how the app works can be found in the link below:
https://drive.google.com/file/d/1IXIzX-m7eV-iLykOD_YhV1xvYd44gjfi/view?usp=sharing
