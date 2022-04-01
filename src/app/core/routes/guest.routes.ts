import { Routes } from '@angular/router';
import { ListGuestComponent } from '../../modules/guest/list-guest/list-guest.component';

export const GUEST_ROUTING: Routes = [
  {
    path: 'guest',
    loadChildren: () => import('../../modules/guest/guest.module').then(m => m.GuestModule)
  }
];

export const GUEST_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    component: ListGuestComponent
  }
];
