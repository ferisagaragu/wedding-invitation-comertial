import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { InvitationModel } from '../models/invitation.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GuestStatusEnum } from '../enums/guest-status.enum';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  findAllGuest(query?: string) {
    return this.http.get(`http://localhost:5000/rest/guests${query ? query : ''}`);
  }

  validateTicket(guestUuid: string): Observable<GuestStatusEnum> {
    console.log(guestUuid)
    return this.http.get(`${environment.baseUrl}/public/guests/validate-ticket/${guestUuid}`)
      .pipe(map((resp: any) => resp.data))
  }

  changeStatus(invitation: InvitationModel) {
    return this.http.patch(
      `${environment.baseUrl}/public/guests/change-status`,
      invitation
    );
  }

  deleteGuest(uuid: string) {
    return this.http.delete(`http://localhost:5000/rest/guests/${uuid}`);
  }

}
