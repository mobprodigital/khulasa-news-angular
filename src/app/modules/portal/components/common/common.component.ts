import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  public slider: boolean = true;
  constructor(public actRoute: ActivatedRoute, public router: Router) {
    this.geturl();
  }
  geturl() {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        let currentPath = ev.url;
        if (currentPath === '/') {
          this.slider = true;
        }
        else {
          this.slider = false;
        }

      }
    })
  }


  ngOnInit() {
  }

}
