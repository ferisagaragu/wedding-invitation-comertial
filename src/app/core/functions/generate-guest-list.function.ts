import { GuestModel } from '../models/guest.model';

export const generateGuestListFunction = (guests: Array<GuestModel>): string => {
  return `
    <div>
      ${
        containsAccept(guests) ?
          `
            <br>

            <em>Invitado(s) confirmado(s):</em>

            <br><br>

            <ul>
              ${
                guests
                  .filter(guest => guest.status === 2)
                  .map(guest => `<li>${guest.name} ${guest.surname} ${guest.motherSurname}</li>`)
                  .join('')
              }
            </ul>
          `
        :
          ''
      }

      ${
        containsDeny(guests) ?
          `
            <br>

            <em>Invitado(s) que no asistirán:</em>

            <br><br>

            <ul>
              ${
                guests
                  .filter(guest => guest.status === 1)
                  .map(guest => `<li>${guest.name} ${guest.surname} ${guest.motherSurname}</li>`)
                  .join('')
              }
            </ul>
          `
        :
          ''
      }
    </span>
  `;
}

const containsAccept = (guests: Array<GuestModel>): boolean => {
  let out = false;

  guests.forEach(guest => {
    if (guest.status === 2) {
      out = true;
    }
  });

  return out;
}

const containsDeny = (guests: Array<GuestModel>): boolean => {
  let out = false;

  guests.forEach(guest => {
    if (guest.status === 1) {
      out = true;
    }
  });

  console.log(out)
  return out;
}
