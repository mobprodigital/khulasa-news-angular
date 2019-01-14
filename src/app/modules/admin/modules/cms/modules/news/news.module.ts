import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { AddNewNewsComponent } from './components/add-new-news/add-new-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatChipsModule, MatIconModule, MatButtonModule, MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [AddNewNewsComponent, AllNewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class NewsModule { }
