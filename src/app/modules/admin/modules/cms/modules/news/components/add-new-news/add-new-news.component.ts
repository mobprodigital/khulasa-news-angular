import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { NewsModel } from 'src/app/model/news.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-new-news',
  templateUrl: './add-new-news.component.html',
  styleUrls: ['./add-new-news.component.css']
})
export class AddNewNewsComponent implements OnInit {


  public tagControlProp = {
    visible: true,
    selectable: true,
    removable: true,
    addOnBlur: true,
  }

  public coverImage: File = null;
  public thumbnailUrl: string | ArrayBuffer;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  
  newsTags: string[] = ['world', 'politics', 'haryana', 'modi'];

  public news: NewsModel = new NewsModel();
  public newsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.newsForm = this.createForm();

  }

  ngOnInit() {
  }

  private createForm() {
    return this.formBuilder.group(this.news);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.news.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: string): void {
    const index = this.news.tags.indexOf(fruit);

    if (index >= 0) {
      this.news.tags.splice(index, 1);
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


  onSubmit() {
    console.log(this.newsForm.value);
    console.log(this.news);
  }

}
