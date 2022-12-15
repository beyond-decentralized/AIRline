import { Comment, Conversation } from '@airline/conversations';
import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'air-conversation-view',
  templateUrl: './conversation-view.component.html',
  styleUrls: ['./conversation-view.component.css'],
})
export class ConversationViewComponent implements OnInit {

  @Input()
  conversation: Conversation = null as any

  constructor(
    private dateService: DateService
  ) { }

  ngOnInit() { }

  getTime(
    date: Date | undefined
  ): string {
    return this.dateService.getTime(date as any)
  }

  identifyComment(
    _index: number,
    comment: Comment
  ): string {
    return comment.id as any
  }

}
