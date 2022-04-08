import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent implements OnInit {

  constructor() { }

  imageBase64: string;

  
// receive data when in edit mode
  @Input()
  urlCurrentImage: string;

  @Output()
  onImageSelected = new EventEmitter<File>();

  ngOnInit(): void {
  }

  change(event){
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: string) => this.imageBase64 = value);
      this.onImageSelected.emit(file);
      this.urlCurrentImage = null;
    }
  }

}
