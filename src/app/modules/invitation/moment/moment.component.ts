import { Component } from '@angular/core';
import { carouselMomentData } from '../../../core/data/carousel-moment.data';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent {
  carouselMoments = carouselMomentData;
}
