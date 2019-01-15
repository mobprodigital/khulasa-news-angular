import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  day: number;
  month: number;
  year: number;
  d = new Date();
  constructor() {

    this.day = this.d.getDate();
    this.month = this.d.getMonth();
    this.year = this.d.getFullYear();
    this.month=this.month+1;
  }
  ngOnInit() {
  }

}
