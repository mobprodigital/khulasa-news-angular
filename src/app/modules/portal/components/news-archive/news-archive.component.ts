import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-archive',
  templateUrl: './news-archive.component.html',
  styleUrls: ['./news-archive.component.css']
})
export class NewsArchiveComponent implements OnInit {
  categoryId: number;
 

    constructor(private activatedRoute: ActivatedRoute, ) { }

    ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        this.categoryId =parseInt(params['id']);
  
      })
    }


}
