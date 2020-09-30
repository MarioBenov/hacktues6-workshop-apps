import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

const targetTime = moment('2020-10-04T23:59:59')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-angular';
  days = 0
  hours = 0
  minutes = 0
  seconds = 0

  ngOnInit() {
    this.updateCountdown()
    setInterval(() => this.updateCountdown(), 1000)
  }

  updateCountdown() {
    const currTime = moment()
    const diffTime = moment.duration(targetTime.diff(currTime))

    this.days = diffTime.days()
    this.hours = diffTime.hours()
    this.minutes = diffTime.minutes()
    this.seconds = diffTime.seconds()
  }
}
