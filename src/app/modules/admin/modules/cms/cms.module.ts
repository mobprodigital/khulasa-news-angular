import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CommonComponent } from './components/common/common.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavLeftSideComponent } from './components/nav-left-side/nav-left-side.component';

@NgModule({
  declarations: [CommonComponent, HeaderComponent, FooterComponent, NavLeftSideComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
