# AngularMap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code

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

