import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  username:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickRegister(){
    this.router.navigate([""]);
  }

}
