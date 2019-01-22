import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { NewsCategoryModel } from 'src/app/model/news-category.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public newsList: NewsModel[] = [];
  public homeCategory: number[] = [1, 2, 3, 4];
  public newsByCat: {
    category: NewsCategoryModel,
    news: NewsModel[]
  }[] = [];
  constructor(private newsService: NewsService, ) {
    this.getNews();
  }
  private getNews() {
    this.newsService.getNews().then(newsData => this.newsList = newsData);
  }
  ngOnInit() {
    this.getNewsByCat()
  }

  private async getNewsByCat() {
    this.newsByCat = await Promise.all(this.homeCategory.map(async cid => {
      let newsData = await Promise.all([
        this.newsService.getNewsCategories(cid),
        this.newsService.getNewsByCategoryId(cid),
      ]);

      return {
        category: newsData[0],
        news: newsData[1]
      };
    }));

  }

}
