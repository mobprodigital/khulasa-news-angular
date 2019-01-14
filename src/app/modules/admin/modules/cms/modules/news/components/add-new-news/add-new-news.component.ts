import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-add-new-news',
  templateUrl: './add-new-news.component.html',
  styleUrls: ['./add-new-news.component.css']
})
export class AddNewNewsComponent implements OnInit {


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  public coverImage: File = null;
  public thumbnailUrl: string | ArrayBuffer;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  newsTags: string[] = ['world', 'politics', 'haryana', 'modi'];


  constructor() { }

  ngOnInit() {
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.newsTags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: string): void {
    const index = this.newsTags.indexOf(fruit);

    if (index >= 0) {
      this.newsTags.splice(index, 1);
    }
  }


  public coverImageChange(ev: MouseEvent) {
    let files: FileList = ev.target['files'];
    if (files && files.length > 0) {
      let img = files[0];
      this.coverImage = img;
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.thumbnailUrl = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(img);
    }
    else {
      if (!this.thumbnailUrl) {
        this.thumbnailUrl = '';
      }
    }
  }


}
