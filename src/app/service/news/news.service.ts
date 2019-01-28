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
    new NewsCategoryModel(7, 'Delhi'),
    new NewsCategoryModel(8, 'Bollywood'),
    new NewsCategoryModel(9, 'Crime'),
    new NewsCategoryModel(10, 'International'),
  ];

  constructor() {
    this.feedNews();
  }

  public getNewsCategories(): Promise<NewsCategoryModel[]>;
  public getNewsCategories(categoryId: number): Promise<NewsCategoryModel>;
  public getNewsCategories(catOrUndefined?: undefined | number): Promise<NewsCategoryModel[] | NewsCategoryModel> {
    return new Promise((resolve, reject) => {
      let argsType = typeof catOrUndefined;
      if (argsType === 'number') {
        resolve(this.newsCategories.find(c => c.id === catOrUndefined));
      }
      else if (argsType === 'undefined') {
        resolve(this.newsCategories);
      }
      else {
        reject('Argument type mismatch');
      }
    });
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

  /**
   * Get all news of a specified news category 
   * @param categoryId id of the news category
   * @param count (default = 10) number of news want to get
   * @param from (default = 1) offset number from where want to get the news
   */
  public getNewsByCategoryId(categoryId: number, count: number = 10, from: number = 1): Promise<NewsModel[]> {
    return new Promise((resolve, reject) => {
      if (categoryId) {
        let news: NewsModel[] = this.newsList.filter(n => n.categories.indexOf(categoryId) > -1);
        if (news && news.length > 0) {
          resolve(news.slice(from - 1, (from -1) + count));
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
    this.newsList.push(...Array.from({ length: 100 }, (_, i) => {
      let n = new NewsModel();
      n.id = i.toString();
      n.title = 'Title ' + i.toString();
      n.content = 'Content ' + i.toString();
      n.author = 'Gyan';
      n.categories = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
      let date = new Date();
      n.createDate = `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()}`;
      n.published = true;
      n.featuredImage = {
        original: 'assets/images/news/default.jpg',
        large: 'assets/images/news/default.jpg',
        medium: 'assets/images/news/default.jpg',
        small: 'assets/images/news/default.jpg'

      }
      return n;
    }))
  }
}
