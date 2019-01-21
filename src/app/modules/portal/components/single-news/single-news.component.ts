import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {
  public newsId: string = '';
  public news: NewsModel;
  constructor(private activatedRouter: ActivatedRoute, private newsservice: NewsService) {
    this.getNewsId()
  }
  private getNews() {
    this.newsservice.getNews(this.newsId).then(newsdata => this.news = newsdata);
  }
  private getNewsId() {
    this.activatedRouter.params.subscribe(params => { this.newsId = params['id'] });
    if(this.newsId)
    {
      this.getNews()
    }
  }
  ngOnInit() {
  }

}
