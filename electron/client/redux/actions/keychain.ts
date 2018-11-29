import { action } from 'typesafe-actions';
import {
    TOGGLE_KEYCHAIN_PANEL,
    KEYCHAIN_CREATE,
    KEYCHAIN_REMOVE_KEY,
    KEYCHAIN_LIST,
    KEYCHAIN_LOCK,
    KEYCHAIN_LIST_SUCCESS,
    KEYCHAIN_SIGN,
    KEYCHAIN_SELECT_KEY,
    KEYCHAIN_LOCK_SUCCESS,
    KEYCHAIN_UNLOCK,
    KEYCHAIN_UNLOCK_SUCCESS,
} from '../constants';

export const toggle = () => action(TOGGLE_KEYCHAIN_PANEL);

export const createKey = (key: string) => action(KEYCHAIN_CREATE, { key });

export const removeKey = (name: string) => action(KEYCHAIN_REMOVE_KEY, { name });

export const signKey = (key: string) => action(KEYCHAIN_SIGN, { key });

export const unlockKey = () => action(KEYCHAIN_UNLOCK);

export const selectKey = (key: string) => action(KEYCHAIN_SELECT_KEY, { key });

export const list = () => action(KEYCHAIN_LIST);

export const lock = () => action(KEYCHAIN_LOCK);

export const listSuccess = (items: string[]) => action(KEYCHAIN_LIST_SUCCESS, items);

export const lockSuccess = () => action(KEYCHAIN_LOCK_SUCCESS);

export const unlockSuccess = () => action(KEYCHAIN_UNLOCK_SUCCESS);