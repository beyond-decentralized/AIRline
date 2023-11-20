import { Conversation } from '@airline/conversations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, mergeMap } from 'rxjs';
import { CommentService } from '../../services/comment.service';
import { ConversationService } from '../../services/conversation.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cvr-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.css'],
})
export class ConversationPage implements OnInit {

  commentText: string = ''
  conversation = toSignal(this.route.params.pipe(
    map(params => params['conversationId']),
    distinctUntilChanged(),
    mergeMap(conversationId =>
      this.conversationService.searchConversation(conversationId))
  ), {
    initialValue: null
  })
  comments = toSignal(this.route.params.pipe(
    map(params => params['conversationId']),
    distinctUntilChanged(),
    mergeMap(conversationId =>
      this.conversationService.searchComments(conversationId))
  ), {
    initialValue: []
  })

  constructor(
    private commentService: CommentService,
    private conversationService: ConversationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  enterComment(): void {
    this.enterCommentAsync(this.conversation() as Conversation).then()
  }

  async enterCommentAsync(
    conversation: Conversation,
  ): Promise<void> {
    await this.commentService
      .addComment(conversation, this.commentText)
    this.commentText = ''
  }

}
