import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewNewsComponent } from './components/add-new-news/add-new-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';

const routes: Routes = [
  {
    path: 'add-new',
    component: AddNewNewsComponent
  },
  {
    path: 'all-news',
    component: AllNewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
