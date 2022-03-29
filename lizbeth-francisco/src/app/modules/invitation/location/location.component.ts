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
      link.href = 'https://www.google.com.mx/maps/place/Gasolinera+Pemex/@16.8441654,-99.8121543,18.58z/data=!4m9!1m2!2m1!1sCarretera+Puerto+Marquez+S%2FN,+Piedra+Roja,+Ejido+De+Cayaco,+39810+Acapulco+de+Ju%C3%A1rez,+Gro.!3m5!1s0x85ca5bfe69b13fb7:0x9e3fca4e795b78ce!8m2!3d16.8446114!4d-99.8116215!15sCltDYXJyZXRlcmEgUHVlcnRvIE1hcnF1ZXogUy9OLCBQaWVkcmEgUm9qYSwgRWppZG8gRGUgQ2F5YWNvLCAzOTgxMCBBY2FwdWxjbyBkZSBKdcOhcmV6LCBHcm8ukgELZ2FzX3N0YXRpb24'
      link.click();
    }
  }

}
