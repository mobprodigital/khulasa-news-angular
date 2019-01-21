import { Injectable } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { NewsCategoryModel } from 'src/app/model/news-category.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsList: NewsModel[] = [];
  public newsCategories: NewsCategoryModel[] = [
    new NewsCategoryModel(1, 'World'),
    new NewsCategoryModel(2, 'Top'),
    new NewsCategoryModel(3, 'Entertain'),
    new NewsCategoryModel(4, 'Sports'),
    new NewsCategoryModel(5, 'India'),
    new NewsCategoryModel(6, 'Local news'),
  ];

  constructor() {
    this.feedNews();
  }

  public getNewsCategories(): Promise<NewsCategoryModel[]> {
    return new Promise((resolve, reject) => {
      resolve(this.newsCategories);
    })
  }


  public getNews(): Promise<NewsModel[]>;
  public getNews(newsId: string): Promise<NewsModel>;
  public getNews(idOrUndefined?: undefined | string): Promise<NewsModel | NewsModel[]> {
    return new Promise((resolve, reject) => {
      let argsType = typeof idOrUndefined;
      if (argsType === 'string') {
        let newsFound = this.newsList.find(n => n.id === idOrUndefined);
        if (newsFound) {
          resolve(newsFound);
        }
        else {
          reject('No news found of specified id');
        }
      }
      else if (argsType === 'undefined') {
        resolve(this.newsList);
      }
      else {
        throw 'Args type mismatch';
      }
    });

  }


  private feedNews() {
    this.newsList.push(...Array.from({ length: 5 }, (_, i) => {
      let n = new NewsModel();
      n.id = i.toString();
      n.title = 'Title ' + i.toString();
      n.content = 'Content ' + i.toString();
      n.author = 'Gyan';
      n.categories = [1, 3, 5],
        n.createDate = new Date();
      n.published = true;
      return n;
    }))
  }
}
