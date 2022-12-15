import { Comment, CommentApi, Conversation } from '@airline/conversations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentApi = new CommentApi()

  constructor() { }

  async addComment(
    conversation: Conversation,
    commentText: string
  ): Promise<void> {
    const comment = new Comment()
    comment.conversation = conversation
    comment.text = commentText
    comment.repository = conversation.repository

    try {
      await this.commentApi.save(comment)
      conversation.comments.push(comment)
    } catch (e: any) {
      console.error(e)
      alert(e.message)
    }
  }
}
