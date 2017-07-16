/**
 * Angular bootstrapping
 */
import { platformBrowser } from '@angular/platform-browser';
/**
 * App Module
 * our top level module that holds all of our components.
 */
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';
import { decorateModuleRef } from './app/environment';
/**
 * Bootstrap our Angular app with a top level NgModule.
 */
export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err: Error) => { throw err; });
}

switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler(): void {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
  main();
}
