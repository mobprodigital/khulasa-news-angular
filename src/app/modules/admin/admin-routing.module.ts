import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren : './modules/login/login.module#LoginModule'
  },
  {
    path : 'cms',
    loadChildren : './modules/cms/cms.module#CmsModule'
  },
  {
    path : '',
    redirectTo : 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
