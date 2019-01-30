import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsCategoryModel } from 'src/app/model/news-category.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date: string;
  public categoryList: NewsCategoryModel[] = [];
  public SearchTerm: string = '';

  d = new Date();
  constructor(private categoryService: NewsService) {
    this.getDate();
    this.getCategory();

  }
  private getCategory() {
    this.categoryService.getNewsCategories().then(cats => {
      let c = cats;
      this.categoryList = cats;
    });
  }

  private getDate() {
    this.date = this.d.getDate() + '/' + (this.d.getMonth() + 1) + '/' + this.d.getFullYear();
  }

  check() {
    alert(this.SearchTerm);
  }

  ngOnInit() {
  }

}
