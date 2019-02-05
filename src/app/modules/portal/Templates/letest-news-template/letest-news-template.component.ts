import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-letest-news-template',
  templateUrl: './letest-news-template.component.html',
  styleUrls: ['./letest-news-template.component.scss']
})
export class LetestNewsTemplateComponent implements OnInit {
  @Input() categoryId: number;
  @Input() count: number;
  @Input() categoryTitle: string;
  @Input() cssClass: string;
  public newsList: NewsModel[] = [];
  public errorMsg: string;
  constructor(private newsService: NewsService, private router: Router) {

  }
  

  getNewsByCategoryId() {
    if (this.categoryId) {
      this.newsService.getNews(this.categoryId, this.count)
        .then(data => this.newsList = data)
        .catch(err => this.errorMsg = err);
    }
  }

  ngOnInit() {
    this.getNewsByCategoryId();
    
      this.router.events.subscribe(ev => {
        if (ev instanceof NavigationEnd) {
          if (this.categoryId == 42) {
            this.getNewsByCategoryId();
          }
         

        }
      })
    }
 

}
