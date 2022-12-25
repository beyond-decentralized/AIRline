import { Conversation } from '@airline/conversations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from '../../services/comment.service';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'cvr-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.css'],
})
export class ConversationPage implements OnInit {

  commentText: string = ''
  conversation: Conversation = null as any
  queryParamsSubscription: Subscription = null as any

  constructor(
    private commentService: CommentService,
    private conversationService: ConversationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.params
      .subscribe(params => {
        this.conversationService.loadConversation(params['conversationId'])
          .then((conversation) => {
            this.conversation = conversation
          })
      })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  enterComment(): void {
    this.enterCommentAsync().then()
  }

  async enterCommentAsync(): Promise<void> {
    await this.commentService
      .addComment(this.conversation, this.commentText)
    this.commentText = ''
    this.conversation = {
      ...this.conversation
    }
  }

}
