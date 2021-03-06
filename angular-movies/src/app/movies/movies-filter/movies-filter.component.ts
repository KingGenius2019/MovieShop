import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({selector: 'app-movies-filter', templateUrl: './movies-filter.component.html', styleUrls: ['./movies-filter.component.css']})

export class MoviesFilterComponent implements OnInit {
    formFilter : FormGroup;

    constructor(private formBuilder : FormBuilder) {}


    genres = [
        {
            id: 1,
            name: 'Drama'
        }, {
            id: 2,
            name: 'Action'
        }
    ];

    movies = [
        {
            title: 'Spider-Man',
            poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        }, {
            title: 'Moana',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
        }, {
            title: 'Inception',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        }
    ];

    originalMovies = this.movies;

    ngOnInit(): void {
        this.formFilter = this.formBuilder.group(
        {title: '', genreId: 0, 
        upcomingReleases: false,
         inTheaters: false});
       
        this.formFilter.valueChanges
        .subscribe(values => {
          this.movies = this.originalMovies;
          this.filterMovies(values);
          // console.log(values);
        });

    }

    filterMovies(values : any) {
        if (values.title) {
            this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
        }
    }

    clearForm() {
        this.formFilter.reset();
    }

}
