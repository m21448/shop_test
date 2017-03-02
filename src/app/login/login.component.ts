import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  login : string = "admin";
  password : string = "admin";

  onLoginButton() : void {

    if (this.login == "admin" && this.password == "admin") {
      this.router.navigateByUrl("products");
    } else {
      alert("Не корректный логин и пароль");
    }
  }


  ngOnInit() {
  }

}
