import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public pwdHide: boolean = true;
  public logInModel: LoginModel = new LoginModel('', '');
  constructor() { }

  ngOnInit() {
  }

  logInSubmit() {
    console.log(this.logInModel);
  }

}
