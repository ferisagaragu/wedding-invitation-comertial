import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  openLink(type: number): void {
    if (type === 0) {
      const link = document.createElement('a');
      link.href = 'https://www.google.com/maps/place/Parroquia+de+San+Jos%C3%A9/@16.7886059,-99.7927076,17z/data=!3m1!4b1!4m5!3m4!1s0x85ca5beccc2025e9:0xd9a3674a22c55976!8m2!3d16.7886904!4d-99.7904729'
      link.click();
    } else {
      const link = document.createElement('a');
      link.href = 'https://www.google.com/maps/place/Jard%C3%ADn+La+Piedra/@16.8442818,-99.8118982,21z/data=!4m12!1m6!3m5!1s0x85ca5be432cda67b:0xa4cd8bebc69532d0!2sJard%C3%ADn+La+Piedra!8m2!3d16.8443771!4d-99.8119451!3m4!1s0x85ca5be432cda67b:0xa4cd8bebc69532d0!8m2!3d16.8443771!4d-99.8119451'
      link.click();
    }
  }

}
