import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public newsList: NewsModel[] = [];
  constructor(private newsService: NewsService,) {
    this.getNews();
  }
  private getNews() {
    this.newsService.getNews().then(newsData => this.newsList = newsData);
  }
  ngOnInit() {

  }

}
