import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { HomeComponent } from './components/home/home.component';
import { NewsArchiveComponent } from './components/news-archive/news-archive.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { SingalPageComponent } from './components/singal-page/singal-page.component';

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        component:HomeComponent
      },
      {
        path:'category/:id',
        component:NewsArchiveComponent
      },
      {
        path:'news/:id',
        component:SingleNewsComponent
      },
      {
        path:'page/:id',
        component:SingalPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
