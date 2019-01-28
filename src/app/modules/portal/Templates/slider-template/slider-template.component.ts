import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider-template',
  templateUrl: './slider-template.component.html',
  styleUrls: ['./slider-template.component.css']
})
export class SliderTemplateComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }, navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log(mySwiper);
  }
}
