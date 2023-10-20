import { Conversation } from '@airline/conversations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, distinctUntilChanged, map, mergeMap } from 'rxjs';
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
      this.conversationService.loadConversation(conversationId))
  ))
  queryParamsSubscription: Subscription = null as any

  constructor(
    private commentService: CommentService,
    private conversationService: ConversationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  enterComment(): void {
    this.enterCommentAsync(this.conversation() as Conversation).then()
  }

  async enterCommentAsync(
    conversation: Conversation
  ): Promise<void> {
    await this.commentService
      .addComment(conversation, this.commentText)
    this.commentText = ''
  }

}
