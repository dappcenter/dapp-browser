import * as Bluebird from 'bluebird';
import * as path from 'path';
import * as fs from 'fs';

import { DAPPS_PATH } from './constants/appPaths';
// const DAPPS_PATH: string = path.join(__dirname, '..', '..', 'dapps', 'download');
// Bluebird as global Promise
declare global {
  export interface Promise<T> extends Bluebird<T> { }
  interface PromiseConstructor {
    delay: typeof Bluebird.prototype.delay;
  }
}

declare const Promise: any;

async function readDir(path: string) {
  return new Promise((res: any, rej: any) => {
    fs.readdir(path, (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
}

async function readFile(path: string, opts = 'utf8') {
  return new Promise((res: any, rej: any) => {
    fs.readFile(path, opts, (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
}

export type AppItem = {

  id?: number;
  appName: string;
  main: string;
  icon: string;
  statusIcon: string[];
  preview: string;
  permissions: string[]
};

const dappsGlobal: AppItem[] = [];

export class AppsManager {
  id: number;
  icon: string;
  permissions: any[];

  static getAppItem(appName: string) {
    const targetDapp = dappsGlobal.find((item: AppItem) => item.appName === appName);
    const randomKey = Math.floor(Math.random() * 1000);

    return Object.assign({}, targetDapp, {
      id: randomKey,
      statusIcon: ['running'], // @todo add icon resolve
    });
  }

  static get dapps() {
    return dappsGlobal;
  }

  static resolvePath(item: AppItem) {
    const icon = path.join(DAPPS_PATH, item.appName, item.icon);
    const preview = path.join(DAPPS_PATH, item.appName, item.preview);
    return { ...item, icon, preview };
  }

  static async parseDapps() {
    try {
      const dappsFolders: string[] = await readDir(DAPPS_PATH);
      console.log('PATH', DAPPS_PATH);

      const promises = dappsFolders.map(folder => this.parseDapp(folder)); // @todo rewrite with async lib
      await Promise.all(promises);

    } catch (err) {
      console.log('Catched', err);
    }
  }

  static async parseDapp(folder: string) {
    try {
      const fileContent = await readFile(path.join(DAPPS_PATH, folder, 'manifest.json'));
      const itemWithResolvedPath = AppsManager.resolvePath(JSON.parse(fileContent));
      AppsManager.dapps.push(itemWithResolvedPath);
      return itemWithResolvedPath;

    } catch (err) {
      if (err instanceof SyntaxError) {
        console.log('Please check your js syntax: \n'); // @todo put it into console logs
        console.log(err);
      } else {
        console.log('other error: ', err);
      }
    }
  }
}
