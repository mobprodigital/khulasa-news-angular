import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scroll() {
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }
}
