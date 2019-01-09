import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { CommonComponent } from './components/common/common.component';

@NgModule({
  declarations: [CommonComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
