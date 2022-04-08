import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreationDTO } from '../actors/actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {
  formActor: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: ActorCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<ActorCreationDTO>();

  ngOnInit(): void {
    this.formActor = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
       biography: ''
    });
    if (this.model !== undefined){
      this.formActor.patchValue(this.model);
    }
  }

  onImageSelected(image){
    this.formActor.get('picture').setValue(image);
  }

  changeMarkdown(content){
    this.formActor.get('biography').setValue(content);
  }

  saveChanges()
  {
    this.onSaveChanges.emit(this.formActor.value);
  }
}
