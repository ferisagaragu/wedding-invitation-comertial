import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { ScannerTicketComponent } from './scanner-ticket/scanner-ticket.component';
import { SharedModule } from '../../shared/shared.module';
import { ViewTicketStatusComponent } from './view-ticket-status/view-ticket-status.component';
import { ListGuestComponent } from './list-guest/list-guest.component';

@NgModule({
  declarations: [
    ScannerTicketComponent,
    ViewTicketStatusComponent,
    ListGuestComponent
  ],
	imports: [
		CommonModule,
		GuestRoutingModule,
		SharedModule
	]
})
export class GuestModule { }
