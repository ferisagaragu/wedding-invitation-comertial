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

    switch (number) {
      case 0: this.musicUrl = 'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-8ad35.appspot.com/o/assets%2Fmp3%2FCamila%20Cabello%2C%20Nicholas%20Galitzine%20-%20Perfect%20(Official%20Audio).mp3?alt=media&token=8df0c120-33d5-4d45-8990-23acea488f59'; break;
      case 1: this.musicUrl = 'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-8ad35.appspot.com/o/assets%2Fmp3%2FEd%20Sheeran%2C%20Perfect%20Symphony%20ft.%20Andrea%20Bocelli%20(lyrics%20_%20translate).mp3?alt=media&token=1ed38779-8197-42ea-b910-990bdea44932'; break;
      case 2: this.musicUrl = 'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-8ad35.appspot.com/o/assets%2Fmp3%2FPerfect%20-%20Ed%20Sheeran%20(Lyrics).mp3?alt=media&token=00346025-1567-4d79-a132-2b88da4503f6'; break;
      case 3: this.musicUrl = 'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-8ad35.appspot.com/o/assets%2Fmp3%2Fperfect.mp3?alt=media&token=61adf0f4-499c-4057-b7b0-4f034f18fe0c'; break;
      default: this.musicUrl = 'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-8ad35.appspot.com/o/assets%2Fmp3%2Fperfect.mp3?alt=media&token=61adf0f4-499c-4057-b7b0-4f034f18fe0c';
    }
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

    return 'Los invitamos a ustedes la familia';
  }

}
