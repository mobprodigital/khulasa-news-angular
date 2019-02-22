import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/service/title/title.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { PostTypeEnum } from 'src/app/enum/post-type.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-singal-page',
  templateUrl: './singal-page.component.html',
  styleUrls: ['./singal-page.component.scss']
})
export class SingalPageComponent implements OnInit {
  public newsId: string = "";
  public news: NewsModel;
  public loader: boolean = true;
  public errorMsg: string = '';
  private routeSubscription: Subscription;
  constructor(private titleService: TitleService, private activatedRouter: ActivatedRoute, private newsservice: NewsService, private router: Router) {
    this.routeSubscription = this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.loader = true;
        this.getNewsId();
      }
    })
  }
  private getNews() {
    this.news = null;
    this.errorMsg = '';
    this.newsservice.getNewsByNewsId(this.newsId, PostTypeEnum.Page)
      .then(newsdata => {
        this.news = newsdata;
        this.titleService.setTitle(this.news.title);
        this.loader = false;
      })
      .catch(err => { this.errorMsg = err; this.loader = false });
    window.scroll({
      top: 0,
      // behavior: "smooth"
    });
  }
  private getNewsId() {

    this.newsId = (this.activatedRouter.snapshot.paramMap.get('id'));
    if (this.newsId) {
      this.getNews();
    }
  }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
