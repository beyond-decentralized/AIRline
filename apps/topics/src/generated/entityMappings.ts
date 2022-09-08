/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { Topic } from '../ddl/Topic';
import { Theme } from '../ddl/Theme';

DEPENDENCY_INJECTION.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('localhost:3002', '@airline/topics');
  accumulator.add(Topic, 0);
  accumulator.add(Theme, 1);
});
