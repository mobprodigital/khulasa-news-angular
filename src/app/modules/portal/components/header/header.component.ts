import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsCategoryModel } from 'src/app/model/news-category.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date = new Date();
  public categoryList: NewsCategoryModel[] = [];
  public SearchTerm: string = '';

  constructor(private categoryService: NewsService) {
    this.getCategory();

  }

  private getCategory() {
    this.categoryService.getMenuCategories().then(cats => {
      let c = cats;
      this.categoryList = cats;
    });
  }


  check() {
    alert(this.SearchTerm);
  }

  ngOnInit() {

  }


}
