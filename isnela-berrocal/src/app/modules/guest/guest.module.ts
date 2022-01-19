import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { ScannerTicketComponent } from './scanner-ticket/scanner-ticket.component';
import { SharedModule } from '../../shared/shared.module';
import { ViewTicketStatusComponent } from './view-ticket-status/view-ticket-status.component';

@NgModule({
  declarations: [
    ScannerTicketComponent,
    ViewTicketStatusComponent
  ],
	imports: [
		CommonModule,
		GuestRoutingModule,
		SharedModule
	]
})
export class GuestModule { }
