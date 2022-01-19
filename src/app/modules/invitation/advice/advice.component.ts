import { Component } from '@angular/core';
import { carouselAdviceData } from '../../../core/data/carousel-advice.data';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent {
  carouselAdvices = carouselAdviceData;
}
