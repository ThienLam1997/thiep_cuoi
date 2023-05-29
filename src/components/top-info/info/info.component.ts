import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  // date = new Date();
  // month = 0
  // day = 0
  // hour = 0
  // minutes = 0
  // seconds = 0

  // dateEnd = new Date("2023-07-15");

  // intervalId: any;

  ngOnInit(): void {
    // this.startDate()
  }

  // ngOnDestroy() { 
  //   if (this.month && this.day && this.hour && this.minutes && this.seconds) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  // startDate() {
  //   this.intervalId = setInterval(() => {
  //     // const date = new Date();
  //     this.month = Number(this.dateEnd.getMonth()) - Number(this.date.getMonth() + 1)
  //     this.day = Number(this.dateEnd.getDate()) - Number(this.date.getDate())
  //     this.hour = Number(this.dateEnd.getHours()) - Number(this.date.getHours())
  //     this.minutes = Number(this.dateEnd.getMinutes()) - Number(this.date.getMinutes())
  //     this.seconds = Number(this.dateEnd.getSeconds()) - Number(this.date.getSeconds())
  //     console.log("aaaaa", this.dateEnd);
      
  //   }, 1000);
  // } 
}
