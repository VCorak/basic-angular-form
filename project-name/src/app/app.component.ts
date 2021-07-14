import { Component, OnInit } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  allFriends : any;

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

public friend = new Friend ("", "", "", "", "")



  constructor (private addFriendService : AddFriendService) {}

  onSubmit() {
    this.addFriendService.addFriend(this.friend)
      .subscribe (
        data => console.log( 'It worked', data),
        error => console.log( 'It did not worked', error)
      )

    this.getAllFriends(this.addFriendService.url);
  }

  ngOnInit() : any {
    this.getAllFriends(this.addFriendService.url)
  }

  public async getAllFriends (url : string) : Promise <any> {
    return await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json();
    }).then(data => (this.allFriends = data));
  }



}



