import { action } from 'typesafe-actions';
import * as uuidv4 from 'uuid/v4';

import * as constants from '../constants';

export const openChannelIntent = () => action(constants.INTENT_OPEN_CHANNELS);

export const openFileManagerDialog = (uid: string) => action(constants.FILE_MANAGER_OPEN_DIALOG, {}, { uid });
export const openDialogSuccess = (entry: any, targetUUID? :string) =>
  action(constants.FILE_MANAGER_OPEN_DIALOG_SUCCESS, { entry }, { targetUUID });
export const openDialogFailure = (error: string, targetUUID? :string) =>
  action(constants.FILE_MANAGER_OPEN_DIALOG_FAILURE, error, { targetUUID });
export const uploadIpfsFile = (entry: string) => action(constants.IPFS_STORAGE_UPLOAD_FILE, {entry});

export const showFileEntries = () => action(constants.SHOW_FILE_ENTRIES);

export const networkGetBlock = (uid: string) => action(constants.NETWORK_GET_BLOCK, {}, { uid });
export const getBlockSuccess = (block: string, targetUUID? :string) =>
  action(constants.NETWORK_GET_BLOCK_SUCCESS, block, targetUUID);
export const getBlockFailure = (error: string, targetUUID? :string) =>
  action(constants.NETWORK_GET_BLOCK_FAILURE, error, targetUUID);
export const networkGetWitness = (witnessId: string) => action(constants.NETWORK_GET_WITNESS, {witnessId});

export const networkSubscribe = () => action(constants.NETWORK_SUBSCRIBE);
export const networkSubscribeSuccess = (result: any, targetUUID? :string) =>
  action(constants.NETWORK_SUBSCRIBE_SUCCESS, { result }, targetUUID);
export const networkSubscribeFailure = (error: string, targetUUID? :string) =>
  action(constants.NETWORK_SUBSCRIBE_FAILURE, error, targetUUID);

export const networkUnsubscribe = () => action(constants.NETWORK_UNSUBSCRIBE);
export const networkUnsubscribeSuccess = (result: any, targetUUID? :string) =>
  action(constants.NETWORK_UNSUBSCRIBE_SUCCESS, { result }, targetUUID);
export const networkUnsubscribeFailure = (error: string, targetUUID? :string) =>
  action(constants.NETWORK_UNSUBSCRIBE_FAILURE, error, targetUUID);

export const writeToConsole = (uid:string, message: string) =>  action(constants.LOGGER_WRITE, { message }, { uid });
export const loggerWriteSuccess = (result: any, targetUUID? :string) =>
  action(constants.LOGGER_WRITE_SUCCESS, { result }, targetUUID);
export const loggerWriteFailure = (error: string, targetUUID? :string) =>
  action(constants.LOGGER_WRITE_FAILURE, error, targetUUID);

export const storageSave = (uid: string, entry: {key: string, value: string}) => action(constants.STORAGE_SAVE, entry, {uid});
export const storageSaveSuccess = (result: any, targetUUID?: string) =>
  action(constants.STORAGE_SAVE_SUCCESS, {result}, targetUUID);
export const storageSaveFailure = (error: string, targetUUID?: string) =>
  action(constants.STORAGE_SAVE_FAILURE, error, targetUUID);

export const showBlock = () => action(constants.SHOW_BLOCK);

export const downloadIpfsFile = (hash: string) =>
  action(constants.IPFS_STORAGE_DOWNLOAD_FILE, { hash });

export const ipfsRoomSubscribe = (topic: string) =>
  action(constants.IPFS_ROOM_SUBSCRIBE, { topic });

// MessageId need to resolve message sending status
export const ipfsRoomSendMessageBroadcast = (message: string, roomName: string, messageId: string = '') =>
  action(constants.IPFS_ROOM_SEND_MESSAGE_BROADCAST, { message, roomName, messageId });

export const ipfsRoomSendMessageToPeer = (message: string | Buffer, roomName: string, peer: string, messageId: string = '') =>
  action(constants.IPFS_ROOM_SEND_MESSAGE_TO_PEER, { message, messageId, roomName, peer });

export const ipfsRoomLeave = (roomName: string) =>
  action(constants.IPFS_ROOM_LEAVE, { roomName } );

export const keychainCreate = (key: string, cipher: string, curve: string) =>
  action(constants.KEYCHAIN_CREATE, {key, cipher, curve});

export const keychainList = () => action(constants.KEYCHAIN_LIST);

export const keychainSign = (key: string, chainId: string, transaction: string) =>
  action(constants.KEYCHAIN_SIGN, {key, chainId, transaction});

export const keychainShowResult = () => action(constants.KEYCHAIN_SHOW_RESULT);

export const orbitDbCreateDatabase = (database: string) => action(constants.ORBIT_DB_CREATE_DATABASE, { database })

export const orbitDbOpenDatabase = (database: string) => action(constants.ORBIT_DB_OPEN_DATABASE, { database })

export const orbitDbAddEntry = (database: string, entry: any) => action(constants.ORBIT_DB_ADD_ENTRY, { database, entry })

export const orbitDbGetEntry = (database: string, hash: string) => action(constants.ORBIT_DB_GET_ENTRY, { database, hash })

export const orbitDbGetAllEntries = (database: string) => action(constants.ORBIT_DB_GET_ALL_ENTRIES, { database })

export const toggleAppHomeSuccess = () => action(constants.TOGGLE_APP_HOME_SUCCESS)
