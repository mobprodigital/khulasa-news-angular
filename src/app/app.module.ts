import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AjaxInterceptor } from './interceptor/ajax-interceptor/ajax-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS, useClass : AjaxInterceptor, multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
