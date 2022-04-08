import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoordinatesMap } from '../../map/coordinates';
import { MovieTheatersCreationDTO, MovieTheatersDTO } from '../movie-theater.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {
movietheaterForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }
  
  @Input()
  model: MovieTheatersDTO;

  @Output()
  onSaveChanges = new EventEmitter<MovieTheatersCreationDTO>();

  initialCoordinates: CoordinatesMap[] = [];

  ngOnInit(): void {

    this.movietheaterForm = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    })

    if (this.model !== undefined){
      this.movietheaterForm.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
   
  }

  
   onSelectedLocation(coordinates: CoordinatesMap){
    this.movietheaterForm.patchValue(coordinates);
   }

  saveChanges(){
    this.onSaveChanges.emit(this.movietheaterForm.value);
  }

}
