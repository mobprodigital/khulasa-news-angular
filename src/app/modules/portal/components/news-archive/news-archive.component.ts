import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { NewsCategoryModel } from 'src/app/model/news-category.model';
@Component({
  selector: 'app-news-archive',
  templateUrl: './news-archive.component.html',
  styleUrls: ['./news-archive.component.css']
})
export class NewsArchiveComponent implements OnInit {
  newsCategoryId: string;
  public newsList: NewsModel[] = [];
  public pageTitle: NewsCategoryModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private newsService: NewsService) {

    this.getnewsId();
    this.getnews();
    this.gettitle();
  }
  private getnewsId() {
    this.activatedRoute.params.subscribe(params => {
      this.newsCategoryId = (params['id']);
    })
  }
  private getnews() {
    this.newsService.getNews().then(newsdata => this.newsList = newsdata)
  }
  private gettitle() {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.pageTitle = this.newsService.newsNameById(this.newsCategoryId);
      }
    })
  }
  ngOnInit() {
  }
}
