import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {
  public newsId: string = '';
  public news: NewsModel;
  private routeSubscription: Subscription;


  constructor(private activatedRouter: ActivatedRoute, private newsservice: NewsService, private router: Router) {
    this.routeSubscription = this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.getNewsId();
      }
    })
  }
  private getNews() {
    this.newsservice.getNewsByNewsId(this.newsId).then(newsdata => this.news = newsdata).catch(err => alert('singl news ' + err));
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }
  private getNewsId() {

    this.newsId = (this.activatedRouter.snapshot.paramMap.get('id'));
    if (this.newsId) {
      this.getNews()
    }
  }
  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
