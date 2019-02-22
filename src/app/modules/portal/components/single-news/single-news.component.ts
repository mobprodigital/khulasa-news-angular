import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { Subscription } from 'rxjs';
import { TitleService } from 'src/app/service/title/title.service';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';


@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {
  public newsId: string = '';
  public news: NewsModel;
  private routeSubscription: Subscription;
  public loader: boolean = true;
  public errorMsg: string = "";
  public ytVideo: boolean = false;
  public youTubeUrl: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer, private titleService: TitleService, private activatedRouter: ActivatedRoute, private newsservice: NewsService, private router: Router) {


    this.routeSubscription = this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.loader = true;
        this.getNewsId();
      }
    })
  }
  private getNews() {
    this.news = null;
    this.newsservice.getNewsByNewsId(this.newsId)
      .then(newsdata => {
        this.news = newsdata;
        this.titleService.setTitle(this.news.title);
        this.loader = false;

        if (this.news.categoryList.some(c => c.id === 47)) {
          let Url = this.geturl(this.news.content);
          console.log(Url)
          if (Url) {
            this.trustedUrl(Url)
            console.log(Url)
          }
          this.ytVideo = true;
        }
      })
      .catch(err => { this.errorMsg = err; this.loader = false });
    window.scroll({
      top: 0,
      // behavior: "smooth"
    });
  }
  trustedUrl(url) {
    this.youTubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  geturl(iframeString: string): string | null {
    let tempDiv: HTMLDivElement = document.createElement('div');
    tempDiv.innerHTML = iframeString;
    let ytIframe: HTMLIFrameElement = tempDiv.querySelector('iframe');
    if (ytIframe) {
      return ytIframe.src;
    }
    else {
      return null;
    }

  }

  private getNewsId() {

    this.newsId = (this.activatedRouter.snapshot.paramMap.get('id'));
    if (this.newsId) {
      this.ytVideo = false;
      this.getNews();
    }
  }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
