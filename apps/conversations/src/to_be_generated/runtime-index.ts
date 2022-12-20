import { loadIframe } from '@airport/web-tower'
import { airApp } from './runtime-injection'

export * from '../dao/dao'
export * from '../ddl/ddl'
// export * from '../dvo/dvo'
export * from '../generated/generated'
export * from './ApplicationLoader'
export * from './runtime-injection'

loadIframe(airApp.getFullName())
