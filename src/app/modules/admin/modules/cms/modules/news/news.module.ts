import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { AddNewNewsComponent } from './components/add-new-news/add-new-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';

@NgModule({
  declarations: [AddNewNewsComponent, AllNewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
