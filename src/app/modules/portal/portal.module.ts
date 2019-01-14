import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { CommonComponent } from './components/common/common.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdComponent } from './components/ad/ad.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { NewsArchiveComponent } from './components/news-archive/news-archive.component';


@NgModule({
  declarations: [CommonComponent, HeaderComponent, FooterComponent, HomeComponent, AdComponent, RightSideBarComponent, SingleNewsComponent, NewsArchiveComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
