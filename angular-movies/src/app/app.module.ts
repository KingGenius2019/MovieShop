import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { CreateMoviesComponent } from './movies/create-movies/create-movies.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { InputImgComponent } from './input-img/input-img.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MoviesFilterComponent } from './movies/movies-filter/movies-filter.component';

import { ImageInputComponent } from './utilities/image-input/image-input.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { InputMarkdownComponent } from './input-markdown/input-markdown.component';
import { EditMovieTheaterComponent } from './movie-theater/edit-movie-theater/edit-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theater/index-movie-theater/index-movie-theater.component';
import { FormActorComponent } from './form-actor/form-actor.component';

import { MovieTheaterFormComponent } from './movie-theater/movie-theater-form/movie-theater-form.component';
import { CreateMovieTheaterComponent } from './create-movie-theater/create-movie-theater.component';
import { FormmovieComponent } from './movies/formmovie/formmovie.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { AutocompleteComponent } from './actors/autocomplete/autocomplete.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GenericListComponent,
    MoviesListComponent,
    CreateMoviesComponent,
    EditMoviesComponent,
    CreateActorComponent,
    EditActorComponent,
    IndexActorsComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    EditGenreComponent,
    InputImgComponent,
    RatingComponent,
    FormGenreComponent,
    MoviesFilterComponent,  
    EditMovieTheaterComponent,
    IndexMovieTheaterComponent,
    FormActorComponent,
    ImageInputComponent,
    MapComponent,
    InputMarkdownComponent,
     MovieTheaterFormComponent,
    CreateMovieTheaterComponent,
    FormmovieComponent,
    MultipleSelectorComponent,
    AutocompleteComponent,
      
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LeafletModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
