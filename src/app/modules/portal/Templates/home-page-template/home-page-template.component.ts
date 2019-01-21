import { Component, OnInit,Input } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-home-page-template',
  templateUrl: './home-page-template.component.html',
  styleUrls: ['./home-page-template.component.css']
})
export class HomePageTemplateComponent implements OnInit {
  @Input() news: NewsModel[]=[];
  constructor() { }

  ngOnInit() {
  }

}
