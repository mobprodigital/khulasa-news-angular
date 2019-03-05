import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchId: string = '';
  public newsList: NewsModel[] = [];
  public errorMsg: string = '';
  public loader: boolean = true;
  public defaultImg: string = "assets/images/news/default.jpg";
  public Arr: Array<number> = Array(10);
  public count: number = 10;


  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.getId();
      }
    })
  }

  public getId() {
    this.searchId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.searchId) {
      this.getSearch();
    }
  }

  private getSearch() {
    this.newsList = [];
    this.errorMsg = '';
    this.loader = true;
    this.newsService.getSearchResults(this.searchId)
      .then(data => {
        this.newsList = data;
        this.loader = false
      })
      .catch(err => {
        this.errorMsg = err;
        this.loader = false
      });
  }
  private moreNews() {
    this.loader = true;
    this.errorMsg = '';
    this.newsService.getSearchResults(this.searchId, this.count, (this.newsList.length + 1))
      .then(newsdata => {
        this.newsList.push(...newsdata);
        this.loader = false;
      })
      .catch(err => {
        this.errorMsg = err;
        this.loader = false;
      });
  }

  ngOnInit() {

  }

}
