import { Goal, Task } from '@airline/tasks';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'air-eisenhower-icon',
  templateUrl: './eisenhower-icon.component.html',
  styleUrls: ['./eisenhower-icon.component.css'],
})
export class EisenhowerIconComponent implements OnInit {

  @Input()
  rankedUnit: Goal | Task = null as any

  constructor() { }

  ngOnInit() { }

  importancePoints(): number[] {
    return this.getPoints('importance')
  }

  urgencyPoints(): number[] {
    return this.getPoints('urgency')
  }

  getPoints(
    propertyName: 'importance' | 'urgency'
  ): number[] {
    let points: number[] = []
    for (let i = 1; i <= this.rankedUnit[propertyName]; i++) {
      points.push(i)
    }

    return points
  }

  identifyPoint(
    index: number,
    _point: number
  ): number {
    return index;
  }

}
