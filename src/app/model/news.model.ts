import { IFeturedImage } from '../interface/featured-image.interface';

export class NewsModel {
    id: string = "";
    title: string = "";
    slug: string = "";
    content: string = "";
    published: boolean = false;
    /* array of ids of selected categories */
    categories: number[] = [1, 2, 3];
    tags: string[] = [];
    featuredImage: IFeturedImage = {
        original: '',
        large: '',
        medium: '',
        small: ''
    };
    author: string = "";
    createDate: Date | string = '';
    publishedDate: Date | string = '';
    canonicalUrl: string = ''
}