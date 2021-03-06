import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTheatersCreationDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: MovieTheatersCreationDTO = {name: 'Agora', latitude: 18.483541251864438, longitude: -69.93927597999574};

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheater: MovieTheatersCreationDTO){

  }

}
