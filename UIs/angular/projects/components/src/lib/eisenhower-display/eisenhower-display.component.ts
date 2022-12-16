import { Goal, Task } from '@airline/tasks';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'air-eisenhower-display',
  templateUrl: './eisenhower-display.component.html',
  styleUrls: ['./eisenhower-display.component.css'],
})
export class EisenhowerDisplayComponent implements OnInit {

  @Input()
  rankedUnit: Goal | Task = null as any

  constructor() { }

  ngOnInit() {}

}
