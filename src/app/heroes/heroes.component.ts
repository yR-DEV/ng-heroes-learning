import { Component, OnInit } from '@angular/core';

// Importing the hero interface. 
import { Hero } from '../hero';

// the component generator made three metadata properties for the component below.
@Component({
  // the component's CSS element selector
  selector: 'app-heroes',

  // this is the location of the components HTML template file
  templateUrl: './heroes.component.html',

  // location of the component's private CSS styles
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'yR'
  };

  // Should do no more than set initial local variables to simple values.
  constructor() { }

  // Below performs complex initializations outside of the constructor. You should not fetch data in a component constructor (do it here?). 
  // Create ngOnChanges() method to access the properties are set but need to be changed based on propertoes
  ngOnInit(): void {
  }

}
