import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public movies: Movie[] = [];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //Los servicios regresan un tipo Observable por esa razón es necesario utilizar el subscribe
    this.peliculasService.getCartelera().subscribe((resp) => {
      this.movies = resp.results;
    });
  }
}
