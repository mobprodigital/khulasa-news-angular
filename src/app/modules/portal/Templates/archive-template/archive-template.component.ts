import { Component, OnInit, Input } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-archive-template',
  templateUrl: './archive-template.component.html',
  styleUrls: ['./archive-template.component.css']
})
export class ArchiveTemplateComponent implements OnInit {


  @Input() news: NewsModel[] = [];
  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}
