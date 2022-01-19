import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  month: number;
  week: number;
  days: number;

  constructor() {
    this.month = 0;
    this.week = 0;
    this.days = 0;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.month = moment('2021-11-05').diff(new Date(), 'months');
      this.week = moment('2021-11-05').diff(new Date(), 'weeks');
      this.days = moment('2021-11-05').diff(new Date(), 'days');
    }, 1000);
  }

}
