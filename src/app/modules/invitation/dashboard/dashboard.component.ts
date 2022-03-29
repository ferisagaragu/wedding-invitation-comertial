import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvitationService } from '../../../core/http/invitation.service';
import { InvitationModel } from '../../../core/models/invitation.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  invitation: InvitationModel;
  load: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private invitationService: InvitationService
  ) {
    this.invitation = null;
    this.load = false;
  }

  ngOnInit(): void {
    this.load = true;

    this.activatedRoute.params.subscribe(params => {
      this.invitationService.findAllInvitation(params.guestUuid).subscribe(resp => {
        if (resp instanceof InvitationModel) {
          this.invitation = resp;
        }

        this.load = false;
      });
    });
  }

}
