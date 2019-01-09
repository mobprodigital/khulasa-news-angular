import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './components/common/common.component';

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: 'news',
        loadChildren: './modules/news/news.module#NewsModule'
      },
      {
        path: 'media',
        loadChildren: './modules/media/media.module#MediaModule'
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
