import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {


  public userModel : UserModel = new UserModel();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userModel);
  }

}
