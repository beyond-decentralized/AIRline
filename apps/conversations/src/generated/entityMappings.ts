/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { CommentReference } from '../ddl/CommentReference';
import { Moderator } from '../ddl/Moderator';
import { Participant } from '../ddl/Participant';
import { Conversation } from '../ddl/Conversation';
import { TakeBackRequest } from '../ddl/TakeBackRequest';
import { Comment } from '../ddl/Comment';

DEPENDENCY_INJECTION.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('localhost:3002', '@airline/conversations');
  accumulator.add(CommentReference, 0);
  accumulator.add(Moderator, 1);
  accumulator.add(Participant, 2);
  accumulator.add(Conversation, 3);
  accumulator.add(TakeBackRequest, 4);
  accumulator.add(Comment, 5);
});
