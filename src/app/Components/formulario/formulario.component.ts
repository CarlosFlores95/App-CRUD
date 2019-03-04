import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../Interface';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private newUser:UsersService) { }

  ngOnInit() {
  }
  
  createUser(user:User) {
    this.newUser.postUser(user).subscribe(
      (data) => {
        console.log(data);
      }
    ) 
  }

  updateUser(id) {
    this.newUser.putUser(id).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  deleteUser(id) {
    this.newUser.deleteUser(id).subscribe(
      data =>{
        console.log(`Se eliminó ${data}`);
      }
    )
  }
}
