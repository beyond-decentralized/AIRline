import { loadIframe } from '@airport/web-tower'
import { airApp } from './conversations.runtime-injection'

export * from '../dao/dao'
export * from '../ddl/ddl'
// export * from '../dvo/dvo'
export * from '../generated/baseDaos'
export * from '../generated/baseDvos'
export * from '../generated/qApplication'
export * from '../generated/qInterfaces'
export * from '../generated/vInterfaces'
export * from './ApplicationLoader'
export * from './conversations.runtime-injection'

loadIframe(airApp.getFullName())
