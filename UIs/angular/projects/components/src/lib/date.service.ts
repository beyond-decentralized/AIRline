import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getMonth(
    dateTime: Date
  ): string {
    switch (dateTime.getMonth()) {
      case 0:
        return "Jan"
      case 1:
        return "Feb"
      case 2:
        return "Mar"
      case 3:
        return "Apr"
      case 4:
        return "May"
      case 5:
        return "Jun"
      case 6:
        return "Jul"
      case 7:
        return "Aug"
      case 8:
        return "Sept"
      case 9:
        return "Oct"
      case 10:
        return "Nov"
      case 11:
        return "Dec"
      default:
        return "N/A"
    }
  }

  lead0(
    num: number
  ): string {
    if (num < 10) {
      return '0' + num
    }
    return '' + num
  }

  getTime(
    dateTime: Date
  ): string {
    return `${this.getMonth(dateTime)} ${dateTime.getDate()}, ${dateTime.getFullYear()} ${this.lead0(dateTime.getHours())}:${this.lead0(dateTime.getMinutes())}`
  }

}
