import { Component, OnInit } from '@angular/core';
import { InvitationService } from '../../../core/http/invitation.service';
import { InvitationModel } from '../../../core/models/invitation.model';

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.scss']
})
export class ListGuestComponent implements OnInit {

  originalInvitations: Array<InvitationModel>;
  invitations: Array<InvitationModel>;
  adults: number;
  children: number;
  accept: number;
  notAccept: number;

  constructor(public invitationService: InvitationService) {
    this.adults = 0;
    this.children = 0;
    this.accept = 0;
    this.notAccept = 0;
  }

  ngOnInit(): void {
    this.invitationService.findAllInvitations().subscribe(resp => {
      this.invitations = resp;
      this.originalInvitations = resp;

      this.invitations.forEach(invitation => {
        invitation.guests.forEach(guest => {
          if (guest.name.includes('adulto')) {
            this.adults = this.adults + 1;
          }

          if (guest.name.includes('niño')) {
            this.children = this.children + 1;
          }

          if (guest.status === 2) {
            this.accept = this.accept + 1;
          }

          if (guest.status !== 2) {
            this.notAccept = this.notAccept + 1;
          }
        });
      });
    });
  }

  search(searchInput: HTMLInputElement) {
    if (!searchInput.value) {
      this.invitations = this.originalInvitations;
    }

    this.invitations = this.originalInvitations.filter(
      invitation => invitation.familyName.toUpperCase().includes(
        searchInput.value.toUpperCase()
      )
    );
  }

}
