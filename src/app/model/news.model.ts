import { NewsCategoryModel } from './news-category.model';
import { IFeturedImage } from '../interface/featured-image.interface';

export class NewsModel {
    id: string = "";
    title: string = "";
    slug: string = "";
    content: string = "";
    published: boolean = false;
    categories: NewsCategoryModel[] = [];
    tags: string[] = [];
    featuredImage: IFeturedImage = {
        orignal: '',
        large: '',
        medium: '',
        small: ''
    };
    auther: string = "";
    createDate: Date | string = '';
    publishedDate: Date | string = '';
    canonicalUrl: string = ''
}