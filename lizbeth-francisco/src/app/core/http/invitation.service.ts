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

  findAllInvitation(query?: string): Observable<Array<InvitationModel> | InvitationModel> {
    return this.http.get(`${environment.baseUrl}${query ? query : ''}.json`)
      .pipe(map((resp: any) => new InvitationModel(resp)));
  }

  generateTickets(invitationUuid: string): Observable<string> {
    return this.http.get(
      `${environment.baseUrl}/public/invitations/ticket/${invitationUuid}`,
      { responseType: 'blob' }
    ).pipe(map(resp => window.URL.createObjectURL(resp)));
  }

}
