import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrl: './peliculas-poster-grid.component.css',
})
export class PeliculasPosterGridComponent {
  @Input() movies: Movie[] = [];
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.movies);
  }

  pintarEstrellas(id: string, total: number) {
    let totalEstrellas = Math.floor(total);
    let starFill = '★';
    let star = '☆';
    let calificacion = starFill.repeat(totalEstrellas);
    let faltante = star.repeat(10 - totalEstrellas);
    // Pintar el resultado en el elemento HTML
    const outputElement = document.getElementById(id);

    // Verificar si el elemento existe antes de asignar el resultado
    if (outputElement) {
      outputElement.innerHTML = calificacion + faltante;
    } else {
      console.error('Elemento con id "output" no encontrado.');
    }
  }
}
