import { Component, OnInit } from '@angular/core';

import { GenresServiceService } from '../genres-service.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {

  constructor(private genreService: GenresServiceService) { }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(genres => {

    })
  }

}
