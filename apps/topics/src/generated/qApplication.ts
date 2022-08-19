import {
    airApi,
    QApplication
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

export interface LocalQApplication extends QApplication {

    db: DbApplication;

  Theme: QTheme;
	Topic: QTopic;

}

const __constructors__ = {
	Theme: Theme,
	Topic: Topic
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'localhost:8100',
  name: '@airline/topics'
};
export const Q: LocalQApplication = Q_APPLICATION

export function diSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.ddS(Q.__dbApplication__, dbEntityId)
}

airApi.setQApplication(Q_APPLICATION)
