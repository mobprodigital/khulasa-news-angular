import { Component, OnInit, Input } from '@angular/core';
import Swiper from 'swiper';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/service/news/news.service';

@Component({
  selector: 'app-slider-template',
  templateUrl: './slider-template.component.html',
  styleUrls: ['./slider-template.component.css']
})
export class SliderTemplateComponent implements OnInit {
  @Input() categoryId: number;
  @Input() count: number;
  public newsList: NewsModel[] = [];
  public errorMsg: string;

  constructor(private newsService: NewsService) {

  }
  scroll() {
    window.scrollTo(0, 0);
  }
  getNewsByCategoryId() {
    if (this.categoryId) {
      this.newsService.getNews(this.categoryId, this.count)
        .then(data => {
          this.newsList = data;
          setTimeout(() => {
            var mySwiper = new Swiper('.swiper-container', {
              slidesPerView: 1,
              spaceBetween: 30,
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          }, 0);
        })
        .catch(err => this.errorMsg = err);
    }
  }
  ngOnInit() {
    this.getNewsByCategoryId()
  }
}