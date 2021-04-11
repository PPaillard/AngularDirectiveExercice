import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raclette Partyyyy';
  isThisIngredientVital:boolean = false;
  displayGuestList:boolean = true;

  songList : String[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
}
