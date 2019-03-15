import { injector, ILogger, useInjectionToken, registerInjectionToken, SYMBOLS } from '@steffi/core';
import { LoggerPlugin } from './logger';

export function registerLogger() {
  registerInjectionToken('LoggerPlugin');
  injector.bind<ILogger>(useInjectionToken('LoggerPlugin')).to(LoggerPlugin).inSingletonScope();

}
export * from './logger';