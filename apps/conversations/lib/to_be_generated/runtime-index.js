import { loadIframe } from '@airport/web-tower';
import { conversations } from './common-tokens';
export * from '../dao/dao';
export * from '../ddl/ddl';
// export * from '../dvo/dvo'
export * from '../generated/generated';
export * from './ApplicationLoader';
export * from './runtime-tokens';
loadIframe(conversations.getFullName());
//# sourceMappingURL=runtime-index.js.map