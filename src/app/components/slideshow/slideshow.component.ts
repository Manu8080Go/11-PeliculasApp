import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css',
})
export class SlideshowComponent {
  @Input() movies: Movie[] = [];
  public mySwiper: Swiper | undefined;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.movies);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
    });

    this.mySwiper = swiper;
  }

  onSlideNext() {
    this.mySwiper?.slideNext();
  }

  onSlidePrev() {
    this.mySwiper?.slidePrev();
  }
}
