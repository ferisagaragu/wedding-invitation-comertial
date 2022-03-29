import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { GuestService } from '../../../core/http/guest.service';

@Component({
  selector: 'app-scanner-ticket',
  templateUrl: './scanner-ticket.component.html',
  styleUrls: ['./scanner-ticket.component.scss']
})
export class ScannerTicketComponent implements OnInit, AfterViewInit {

  @ViewChild('qrScannerComponent') qrScannerComponent: QrScannerComponent;

  code: number;

  constructor(private guestService: GuestService) {
    this.code = null;
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.getCamera();

    this.qrScannerComponent.capturedQr.subscribe(result => {
      this.guestService.validateTicket(result).subscribe(resp => {
        this.code = resp;
        console.log(this.code)
        setTimeout(() => {
          this.code = null;
        }, 2000);
      });

      this.getCamera();
    });
  }

  private getCamera(): void {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];

      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }

      if (videoDevices.length > 0){
        let choosenDev;

        for (const dev of videoDevices){
          if (dev.label.includes('front')){
            choosenDev = dev;
            break;
          }
        }

        /*if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {*/
          this.qrScannerComponent.chooseCamera.next(videoDevices[1]);
        //}
      }
    });
  }

}
