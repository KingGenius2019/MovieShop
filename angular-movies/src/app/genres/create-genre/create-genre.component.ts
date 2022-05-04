import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genre.model';
import { GenresServiceService } from '../genres-service.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private genresService: GenresServiceService, private router: Router, ) { }

  ngOnInit(): void {
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    // ... save the genre
    console.log(genreCreationDTO)
    // this.genresService.create(genreCreationDTO).subscribe (() => {
    //   this.router.navigate(['/genres']);
    // }, error =>  console.error(error)
    
    // );
    this.genresService.create(genreCreationDTO).subscribe ({
      next: () => this.router.navigate(['/genres']),
      error: (error) => console.error(error)
    });

  }
}
