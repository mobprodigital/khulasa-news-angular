import { Component, OnInit } from '@angular/core';
import { AdminMenu, AdminMenuItem } from 'src/app/model/admin-menu.model';

@Component({
  selector: 'app-nav-left-side',
  templateUrl: './nav-left-side.component.html',
  styleUrls: ['./nav-left-side.component.css']
})
export class NavLeftSideComponent implements OnInit {

  public menuList: AdminMenu[] = [];


  constructor() {
    this.insertMenuItems();
  }

  ngOnInit() {
  }

  /**
   * Insert menu items in menu list
   */
  public insertMenuItems(): void {
    this.menuList.push(...[
      new AdminMenu('News', [
        new AdminMenuItem('Add new', 'news/add-new'),
        new AdminMenuItem('All news', 'news/all-news'),
      ]),
      new AdminMenu('Media', [
        new AdminMenuItem('Add new', 'media/add-new'),
        new AdminMenuItem('All Media', 'media/all-media')
      ]),
    ])
  }
}
