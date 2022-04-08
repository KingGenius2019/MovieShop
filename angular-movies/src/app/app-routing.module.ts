import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';

import { MoviesFilterComponent } from './movies/movies-filter/movies-filter.component';
import { CreateMoviesComponent } from './movies/create-movies/create-movies.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { IndexMovieTheaterComponent } from './movie-theater/index-movie-theater/index-movie-theater.component';
import { EditMovieTheaterComponent } from './movie-theater/edit-movie-theater/edit-movie-theater.component';
import { CreateMovieTheaterComponent } from './create-movie-theater/create-movie-theater.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},
  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},
  {path: 'movietheaters', component: IndexMovieTheaterComponent},
   {path: 'movietheaters/create', component: CreateMovieTheaterComponent},
  {path: 'movietheaters/edit/:id', component: EditMovieTheaterComponent},
  {path: 'movies/create', component: CreateMoviesComponent},
  {path: 'movies/edit/:id', component: EditMoviesComponent},
  {path: 'movies/filter', component: MoviesFilterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
