import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
@Component({
  selector: 'app-home-page-template',
  templateUrl: './home-page-template.component.html',
  styleUrls: ['./home-page-template.component.css']
})
export class HomePageTemplateComponent implements OnInit {
  @Input() title: string;
  @Input() count: number;
  @Input() categoryId: number;
  @Input() cssClass: string;
  public newsList: NewsModel[] = [];

  constructor(private newsService: NewsService) {

  }
 
  public getNewsByCategory() {
    this.newsService.getNews(this.categoryId, this.count).then(newsdata => this.newsList = newsdata).catch(err => alert(err));
  }
  ngOnInit() {
    this.getNewsByCategory();
  }

}
