import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guest-message',
  templateUrl: './guest-message.component.html',
  styleUrls: ['./guest-message.component.scss']
})
export class GuestMessageComponent {

  @ViewChild("audioPlayer") audioPlayer: HTMLAudioElement | any;

  @Input() familyName: string;

  musicUrl: string;
  private played: boolean;

  constructor() {
    this.played = false;
    const number = Math.round(Math.random() * 3);
    this.musicUrl = 'https://pechblenda-files.webcindario.com/lizbeth-francisco/amarte-por-mil-anos-mas-letra.mp3';
  }

  play() {
    if (!this.played) {
      this.played = true;
      this.audioPlayer.nativeElement.play();
    } else {
      this.played = false;
      this.audioPlayer.nativeElement.pause();
    }
  }

  getGuestMessage(familyName: string): string {
    if (
      (
        familyName.includes('Tia') ||
        familyName.includes('Tía') ||
        familyName.includes('_f')
      ) &&
      familyName.includes(' y ')
    ) {
      return 'Las invitamos a ustedes';
    }

    if (
      (
        familyName.includes('Tio') ||
        familyName.includes('Tío') ||
        familyName.includes('_m')
      ) &&
      familyName.includes(' y ')
    ) {
      return 'Los invitamos a ustedes';
    }

    if (familyName.includes('Tia') || familyName.includes('Tía')) {
      return 'La invitamos a usted';
    }

    if (familyName.includes('Tio') || familyName.includes('Tío')) {
      return 'Lo invitamos a usted';
    }

    if(familyName.includes('*')) {
      return 'Te invitamos a ti';
    }

    if(familyName.includes('???')) {
      return 'Te queremos invitar ';
    }

    return 'Los invitamos a ustedes la familia';
  }

}
