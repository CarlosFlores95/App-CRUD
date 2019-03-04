import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  users:any;

  constructor(private _user:UsersService) { }

  ngOnInit() {
    this._user.getUsers().subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      }
    )
  }

}
