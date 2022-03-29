import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-godparents',
  templateUrl: './godparents.component.html',
  styleUrls: ['./godparents.component.scss']
})
export class GodparentsComponent {

  @ViewChild("godParentsEnd") godParentsEnd: HTMLElement | any;

  onGoToEnd(): void {
    this.godParentsEnd.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}
