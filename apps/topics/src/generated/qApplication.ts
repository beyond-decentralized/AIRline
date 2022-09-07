import {
    airApi,
    QApp
} from '@airport/aviation-communication'
import {
    DbApplication,
    ApplicationEntity_LocalId,
}                      from '@airport/ground-control';
import { QTheme } from './qtheme';
import { QTopic } from './qtopic';
import {
  Theme,
  Topic
} from '../ddl/ddl';

export interface localhost_colon_3002____at_airline_slash_topics_LocalQApp extends QApp {

    db: DbApplication;

  Theme: QTheme;
	Topic: QTopic;

}

const __constructors__ = {
	Theme: Theme,
	Topic: Topic
};

export const Q_localhost_colon_3002____at_airline_slash_topics: localhost_colon_3002____at_airline_slash_topics_LocalQApp = <any>{
	__constructors__,
  domain: 'localhost:3002',
  name: '@airline/topics'
};
export default Q_localhost_colon_3002____at_airline_slash_topics

export function localhost_colon_3002____at_airline_slash_topics_diSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.dS(Q_localhost_colon_3002____at_airline_slash_topics.__dbApplication__, dbEntityId)
}

airApi.setQApp(Q_localhost_colon_3002____at_airline_slash_topics)
