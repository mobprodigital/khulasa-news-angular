import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './components/common/common.component';

const routes: Routes = [
  {
    path : '',
    component : CommonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
