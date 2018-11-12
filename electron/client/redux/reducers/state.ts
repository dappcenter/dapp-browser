import { AppItem, NotifyItem, ActiveDapp, StatusBarItem, FeedItem, SearchItem } from '../model';

// @todo refactor
// export interface ToggleStatus {
//   NotificationPanel isOpen
//   LoaderPanel isOpen
//   SettingsPanel isOpen
//   StatusBarPanel isOpen
//   StatusBarPanel isPeersOpen
//   SearchPanel isOpen
// }

export interface Feed {
  items: FeedItem[]
}

export interface Tray {
  items: AppItem[],
  activeDapp: ActiveDapp,
  pinned: string[],
  isHome: boolean;
}

export interface NotificationPanel {
  items: NotifyItem[],
  isOpen: boolean;
}

export interface LoaderPanel {
  isOpen: boolean;
}

export interface SettingsPanel {
  isOpen: boolean;
}

export interface StatusBarPanel {
  items: { [index: string]: StatusBarItem; };
  isOpen: boolean;
  isPeersOpen: boolean;
  loggerWrite: boolean;
}

export interface SearchPanel {
  items: { [groupName: string]: SearchItem[]; };
  isOpen: boolean;
}

export interface PermissionsPanel {
  permissions: {[index: string]: Permission[]};
}

export interface IState {
  notification: NotificationPanel;
  loader: LoaderPanel;
  statusBar: StatusBarPanel;
  tray: Tray;
  feed: Feed;
  settings: SettingsPanel;
  search: SearchPanel;
  permissions: PermissionsPanel;
}

export type IsHome = boolean;
 export interface Window {
  height: number;
  weight: number;
}
 export interface ActiveDapp {
  appName: string;
}

export type Permission = 'ipfs' | 'network' | 'storage' | 'filesystem' | 'logger' | 'keychain';
