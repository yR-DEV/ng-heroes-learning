# TOUR OF HEROES - I will be taking notes here

## NOTES

### STEP 0x0
- ```ng new app_name_here```
- ```ng-serve --open``` starts the local development server and --open flag signals to open in the browser at ```http://localhost:4200```. The page that you see is the application shell. The shell is controlled by the Angular component called AppComponent. Components are the building blocks of angular applications.
- When opening the src/app folder, the implementation of the shell AppComponent is distributed over three files: 1. ```app.component.ts``` which is the component class code and written in TypeScript 2. ```app.component.html``` which is the component template written in HTML 3. ```app.component.css``` which is the component's private CSS styles.

### STEP 0x1 The Hero Editor
- ```ng generate component heroes``` and this component needs to be declared in EXACTLY ONE ng module. We import this one inside of the app.module.ts . Two way data binding is used between the ```{{ hero.name }}``` and the ```<input [(ngModel)]=" "``` so data cab flow from the javascript variable/object to the html input field. ngOnInit() performs complex initializations outside of the constructor. You should not fetch data in a component constructor (do it here?). Create ngOnChanges() method to access the properties are set but need to be changed based on properties
- Stopping at this step and adding protractor. 


