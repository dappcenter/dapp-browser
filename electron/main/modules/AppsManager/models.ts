import * as Bluebird from 'bluebird';

export type AppItem = {
  id?: number;
  appName: string;
  main: string;
  icon: string;
  statusIcon?: string[];
  preview: string;
  installed: boolean;
  manifest: any;
  categories?: string[];
  downloadStatus: {
    isDownloadStarted: boolean;
    downloadSuccess: any;
    downloadFailure: any;
  } | null;
  permissions: string[];
  hash: string;
};

export interface ReadyDapp {
  name: string;
  uuid: string;
}

export type DappDownloadEntity = {
  hash: string;
  appName: string;
  preview?: string;
  categories?: string[];
  permissions?: string[];
  installed?: boolean;
};


declare global {
  export interface Promise<T> extends Bluebird<T> {
  }

  interface PromiseConstructor {
    delay: typeof Bluebird.prototype.delay;
  }
}

declare const Promise: any;
