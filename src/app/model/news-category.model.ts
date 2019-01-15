export class NewsCategoryModel {
    
    slug: string;
    
    constructor(public id: string, public name: string) {
        this.slug = this.name.split(' ').join('-');
    }
}