import { Conversation } from '@airline/conversations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, mergeMap, shareReplay, take } from 'rxjs';
import { CommentService } from '../../services/comment.service';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'cvr-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.css'],
})
export class ConversationPage implements OnInit {

  commentText: string = ''
  conversation$: Observable<Conversation> = this.route.params.pipe(
    mergeMap(params =>
      this.conversationService.loadConversation(params['conversationId'])
        .pipe(
          shareReplay(1)
        ))
  )
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
    const subscription = this.conversation$.pipe(
      take(1)
    ).subscribe(conversation => {
      this.enterCommentAsync(conversation).then()
    })
    subscription.unsubscribe()
  }

  async enterCommentAsync(
    conversation: Conversation
  ): Promise<void> {
    await this.commentService
      .addComment(conversation, this.commentText)
    this.commentText = ''
  }

}
