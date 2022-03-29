import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InvitationModel } from '../../../core/models/invitation.model';
import { GuestModel } from '../../../core/models/guest.model';
import { SweetAlert2Service } from 'ng-urxnium';
import { generateGuestListFunction } from '../../../core/functions/generate-guest-list.function';
import { GuestService } from '../../../core/http/guest.service';
import { InvitationService } from '../../../core/http/invitation.service';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-form-guest',
  templateUrl: './form-guest.component.html',
  styleUrls: ['./form-guest.component.scss']
})
export class FormGuestComponent implements OnInit {

  @Input() invitation: InvitationModel;
  @ViewChild('qrScannerComponent') qrScannerComponent: QrScannerComponent;

  guests: Array<GuestModel>;
  load: boolean;

  constructor(
    private swal: SweetAlert2Service,
    private guestService: GuestService,
    private invitationService: InvitationService
  ) { }

  ngOnInit() {
    this.guests = this.invitation.guests;
  }

  onSendDecision(): void {
    this.swal.fire({
      icon: 'warning',
      title: '¿Estas segur@ de tu decision?',
      text: 'Ya que estamos pasando por ' +
        'tiempos difíciles debido al COVID-19, ' +
        'necesitamos que pienses bien tu respuesta ' +
        'ya que tu decision sera <b>irrevocable</b>.' +
        generateGuestListFunction(this.guests),
      showCancelButton: true,
      materialButtonsColor: '#6D2741',
      theme: 'material'
    }).subscribe(resp => {
      if (resp) {
        this.invitation.send = true;
        this.load = true;

        this.guestService.changeStatus(this.invitation).subscribe(_ => {
          this.load = false;
        });
      }
    });
  }

  generateTicket(): void {
    this.load = true;

    this.invitationService.generateTickets(this.invitation.uuid).subscribe(resp => {
      const link = document.createElement('a');
      link.href = resp;
      link.click();
      this.load = false;
    });
  }

}
