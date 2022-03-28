import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  openLink() {
    const link = document.createElement('a');
    link.href = 'https://www.google.com/maps/place/Salones+Kristal/@19.234419,-98.9990267,17z/data=!3m1!4b1!4m5!3m4!1s0x85ce1b44048a7a83:0x24f913db28af2144!8m2!3d19.234419!4d-98.996838'
    link.click();
  }

}
