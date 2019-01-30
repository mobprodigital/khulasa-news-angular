import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { CommonComponent } from './components/common/common.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdComponent } from './components/ad/ad.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { NewsArchiveComponent } from './components/news-archive/news-archive.component';
import { HomePageTemplateComponent } from './Templates/home-page-template/home-page-template.component';
import { ArchiveTemplateComponent } from './Templates/archive-template/archive-template.component';
import { SliderTemplateComponent } from './templates/slider-template/slider-template.component';
import { LetestNewsTemplateComponent } from './templates/letest-news-template/letest-news-template.component';
@NgModule({
  declarations: [CommonComponent, HeaderComponent, FooterComponent, HomeComponent, AdComponent, RightSideBarComponent, SingleNewsComponent, NewsArchiveComponent, HomePageTemplateComponent, ArchiveTemplateComponent, SliderTemplateComponent, LetestNewsTemplateComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortalModule { }
