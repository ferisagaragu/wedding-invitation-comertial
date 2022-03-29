import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { InvitationModel } from '../models/invitation.model';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient) { }

  findAllInvitation(query?: string): Observable<InvitationModel> {
    return this.http.get(`${environment.baseUrl}/${query}.json`)
      .pipe(map(resp => new InvitationModel(resp)));
  }

  findAllInvitations(): Observable<Array<InvitationModel>> {
    return this.http.get(`${environment.baseUrl}/.json`)
      .pipe(map((resp: any) => {
        const out = [];

        for (let key in resp) {
          if (resp.hasOwnProperty(key)) {
            out.push(new InvitationModel(resp[key]));
          }
        }

        return out;
      }));
  }

  generateTickets(guests: Array<string>): Observable<string> {
    return this.http.post(
      `${environment.baseTicketUrl}/public/invitations`,
      guests,
      { responseType: 'blob' }
    ).pipe(map(resp => URL.createObjectURL(resp)));
  }

}
