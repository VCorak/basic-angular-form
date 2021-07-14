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

  languages: any = [
  {
    name: 'JavaScript'
  },
  {
    name: 'PHP'
  },
  {
    name: 'C#'
  },
  {
    name: 'Pyton'
  }
]

public friend = new Friend ("", "", "", "", "")



  constructor (private addFriendService : AddFriendService) {}

  ngOnInit() : any {
    this.getAllFriends('http://localhost:9012/allFriends') // have to call the function with url/allFriends
    // console.log(this.allFriends);
  }

  onSubmit() {
    this.addFriendService.addFriend(this.friend)
      .subscribe (
        data => console.log( 'It worked', data),
        error => console.log( 'It did not worked', error)
      )

    this.getAllFriends('http://localhost:9012/allFriends'); // have to call the function with url/allFriends
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



