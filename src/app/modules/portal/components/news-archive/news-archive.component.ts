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
  public newsCategoryId: number;
  public newsList: NewsModel[] = [];
  public pageTitle: string = 'News';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private newsService: NewsService) {

    this.getnewsId();
    this.getnews();

  }
  private getnewsId() {
    this.activatedRoute.params.subscribe(params => {
      this.newsCategoryId = parseInt(params['id']);
    })
  }
  private getnews() {
    this.newsService.getNewsByCategoryId(this.newsCategoryId).then(newsdata => this.newsList = newsdata);
    this.newsService.getNewsCategories(this.newsCategoryId).then(cat => this.pageTitle = cat.name);
  }

  ngOnInit() {
  }
}
