import { Component } from '@angular/core';
import { Friend } from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

languages: any[] = [
  {
    "name": "Java Script"
  },
  {
    "name": "PHP"
  },
  {
    "name": "C#"
  },
  {
    "name": "Pyton"
  }
]

public friend = new Friend("", "", "", "")
}


