import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-news-archive',
  templateUrl: './news-archive.component.html',
  styleUrls: ['./news-archive.component.css']
})
export class NewsArchiveComponent implements OnInit, OnDestroy {

  public newsCategoryId: number;
  public newsList: NewsModel[] = [];
  public pageTitle: string = 'News';
  private routeSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private newsService: NewsService) {
    this.routeSubscription = this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.getNewsCategoryId();
      }
    })
  }

  public getNewsByCategory() {
    this.newsService.getNews(this.newsCategoryId).then(newsdata => this.newsList = newsdata).catch(err => alert(err));
    this.newsService.getNewsCategories(this.newsCategoryId).then(cat => this.pageTitle = cat.name).catch(err => alert(err));
    window.scroll({
      top : 0,
      behavior : "smooth"
    });
  }
  private getNewsCategoryId() {
    let catId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (catId != undefined && catId != null) {
      this.newsCategoryId = catId;
      this.getNewsByCategory();
    }
  }
  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
