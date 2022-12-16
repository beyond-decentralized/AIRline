import { Goal, Task } from '@airline/tasks';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'air-eisenhower-inputs',
  templateUrl: './eisenhower-inputs.component.html',
  styleUrls: ['./eisenhower-inputs.component.css'],
})
export class EisenhowerInputsComponent implements OnInit {

  @Input()
  rankedUnit: Goal | Task = null as any

  constructor() { }

  ngOnInit() {}

}
