import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-formmovie',
  templateUrl: './formmovie.component.html',
  styleUrls: ['./formmovie.component.css']
})
export class FormmovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  formMovie: FormGroup

  @Input()
   model: movieDTO

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedMovieTheaters: multipleSelectorModel[] = [
    {key: 1, value: 'Agora'},
    {key: 2, value: 'Sambil'},
    {key: 3, value: 'Megacentro'},
  ]

  nonSelectedGenres: multipleSelectorModel[] = [
    {key: 1, value: 'Drama'},
    {key: 2, value: 'Action'},
    {key: 3, value: 'Comedy'},
  ]
  
  selectedGenres: multipleSelectorModel[] = [];
  selectedMovieTheaters: multipleSelectorModel[] = [
 
  ]

  ngOnInit(): void {
    this.formMovie = this.formBuilder.group({
      title: ['',{
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: ''
    });
    if (this.model !== undefined){
      this.formMovie.patchValue(this.model);
    }
}

onImageSelected(file: File){
  this.formMovie.get('poster').setValue(file);

}

changeMarkdown(content: string){
  this.formMovie.get('summary').setValue(content);
}

saveChanges(){
  const genresIds = this.selectedGenres.map(value => value.key);
    this.formMovie.get('genresIds').setValue(genresIds);

    // const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    // this.form.get('movieTheatersIds').setValue(movieTheatersIds);

this.onSaveChanges.emit(this.formMovie.value);
}

}
