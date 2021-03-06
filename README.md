# AngularMap

## Requirements
 - [NodeJs](https://nodejs.org/en/) version 8+
 - [Angular CLI](https://github.com/angular/angular-cli) version 6+

## Installation

Install all the dependencies of the project

    npm install
    
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code

The code contains many branches to help building the project step by step

 - list of all branches

      ```
     git branch

 - change to a specific branch: the readme of each branch details briefly what has changed
     
     ```
     git checkout < name-of-branch > 
  
### Branch use-angular-material

Generate the layout 

     ng generate @angular/material:material-table --name app-layout

### Branch display-google-map

Install [AGM](https://github.com/SebastianM/angular-google-maps)

    npm install @agm/core --save
    
Import the module in the `app.module.ts` file

### Branch template-variable

The template variable `#infowindow` allows to close the previous infowindow.
More on [template variable](https://angular.io/guide/template-syntax#template-reference-variables--var-)

### Branch reactive form

Using angular [ReactiveFormsModule](https://angular.io/guide/reactive-forms) to control dynamically the form (we react
to input event).
`new FormControl()` create a directive that allows to manage a FormControl instance directly inside the template (the 
input is bound to `search' inside the component via what is called an [input binding](https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding)).

### Branch use-service

generate a service
    
    ng g s app 
    
The above is a shorthand for `ng generate service app`

The list of markers is fetched from the service

### Branch different-types-observables

Use of a BehaviorSubject in the service so as to have a Subject with an initial value. 
Subject are both Observable and Observer. 
They have the advantage of being an Observable to stream data, but can also invoke the `next()` method in order to change that 
stream at some point in time.

### Branch component-interaction

It uses the [event binding](https://angular.io/guide/component-interaction#parent-listens-for-child-event) to pass data
from child `layout.component` to parent `app.component`.
Also, [@ViewChildren](https://angular.io/guide/component-interaction#parent-calls-an-viewchild) allows the parent 
`app.component` to get access to the children `AgmMarker` making possible to call children methods from the parent.

## Contribution

As part of the FEND nanodegree, this project aims at helping to get start with Angular by doing an Angular version of 
the 8th project (interacting with google map in React).

Pull requests by Udacians will be welcomed because it is always #betterTogether
