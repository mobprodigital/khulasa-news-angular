import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-letest-news-template',
  templateUrl: './letest-news-template.component.html',
  styleUrls: ['./letest-news-template.component.scss']
})
export class LetestNewsTemplateComponent implements OnInit {
  @Input() categoryId: number;
  @Input() count: number;
  public newsList: NewsModel[] = [];
  public title: string;
  public errorMsg: string;
  constructor(private newsService: NewsService) {
  
   }


  getNewsByCategoryId() {
    if (this.categoryId) {
      this.newsService.getNewsByCategoryId(this.categoryId, this.count)
        .then(data => this.newsList = data)
        .catch(err => this.errorMsg = err);
    }
  }
  getNewsCategory() {
    if(this.categoryId)
    {
      this.newsService.getNewsCategories(this.categoryId)
      .then(title => this.title = title.name);
    }
  }
  ngOnInit() {
    this.getNewsCategory();
    this.getNewsByCategoryId();
  }

}
