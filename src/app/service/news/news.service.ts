import { Injectable } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { NewsCategoryModel } from 'src/app/model/news-category.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsList: NewsModel[] = [];
  public categoryList: NewsCategoryModel[] = [
    new NewsCategoryModel(1, 'World'),
    new NewsCategoryModel(2, 'Top'),
    new NewsCategoryModel(3, 'Entertain'),
    new NewsCategoryModel(4, 'Sports'),
    new NewsCategoryModel(5, 'India'),
    new NewsCategoryModel(6, 'Local news'),
    new NewsCategoryModel(7, 'Delhi'),
    new NewsCategoryModel(8, 'Bollywood'),
    new NewsCategoryModel(9, 'Crime'),
    new NewsCategoryModel(10, 'International'),
  ];

  constructor() {
    this.feedNews();
  }
  public getNewsCategories(): Promise<NewsCategoryModel[]> {
    return new Promise((resolve, reject) => {
      resolve(this.categoryList);
    })
  }

  public getNewsByid(newsId: string): Promise<NewsModel> {
    return new Promise((resolve, reject) => {
      let newsFound = this.newsList.find(n => n.id === newsId);
      if (newsFound) {
        resolve(newsFound);
      }
      else {
        reject('No news found of specified id');
      }
    })
  }

  
  public getAllNews = () => this.newsList;

  public getNewsByCategoryId(categoryId: number): Promise<NewsModel[]> {
    return new Promise((resolve, reject) => {
      if (categoryId) {
        let news: NewsModel[] = this.newsList.filter(n => n.categories.indexOf(categoryId) > -1);
        if (news && news.length > 0) {
          resolve(news);
        }
        else {
          reject('No news found of this category');
        }
      }
      else {
        reject('No news found of this category');
      }
    })
  }


  public getNews(): Promise<NewsModel[]>;
  public getNews(newsId: string): Promise<NewsModel>;
  public getNews(idOrUndefined?: undefined | string): Promise<NewsModel | NewsModel[]> {
    return new Promise((resolve, reject) => {
      let argsType = typeof idOrUndefined;
      if (argsType === 'string') {
        this.getNewsByid(<string>idOrUndefined).then(n => resolve(n)).catch(err => reject(err));
      }
      else if (argsType === 'undefined') {
        resolve(this.getAllNews());
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
      n.categories = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
      n.createDate = new Date();
      n.published = true;
      return n;
    }))
  }
}
