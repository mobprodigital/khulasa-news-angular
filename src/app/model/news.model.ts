import { NewsCategoryModel } from './news-category.model';

export class NewsModel {
    id: string = "";
    title: string = "";
    slug: string = "";
    content: string = "";
    published: boolean = false;
    categories: NewsCategoryModel[] = [];
    tags: string[] = [];
    featuredImage: string = "";
    auther: string = "";
    createDate: Date | string = '';
    publishedDate: Date | string = '';
    canonicalUrl : string = ''
}