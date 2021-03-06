import { action } from 'typesafe-actions';
import * as constants from './constants';
import { AppItem } from './models';

export const dappSetFocus = (targetUUID: string) => action(constants.DAPP_SET_FOCUS, null, { targetUUID });
export const dappResetFocus = (targetUUID: string) => action(constants.DAPP_RESET_FOCUS, null, { targetUUID });
export const onDappInstall = (dappName: string, hash: string) => action(constants.ON_DAPP_INSTALL, { dappName, hash });
export const onDappInstallSuccess = (uid: string) => action(constants.ON_DAPP_INSTALL_SUCCESS, null, { uid });
export const onDappInstallFailure = (error: string, uid: string) => action(constants.ON_DAPP_INSTALL_FAILURE, { error }, { uid });
export const onDappClose = (dappName: string) => action(constants.ON_DAPP_CLOSE, { dappName });

export const getAllDapps = () => action(constants.GET_ALL_DAPPS);
export const getAllDappsSuccess = (dappsList: any, uid: string) => action(constants.GET_ALL_DAPPS_SUCCESS, { dappsList }, { uid });
export const getAllDappsFailure = (error: any, uid: string) => action(constants.GET_ALL_DAPPS_FAILURE, { error }, { uid });

export const downloadDapp = (hash: string) => action(constants.DAPP_DOWNLOAD, { hash });
export const downloadDappSuccess = (dapp: AppItem) => action(constants.DAPP_DOWNLOAD_SUCCESS, { dapp });
export const downloadDappFailure = (hash: string, error: any) => action(constants.DAPP_DOWNLOAD_FAILURE, {
  hash,
  error
});

export const updateinstalledDapps = (dappsList: AppItem[]) => action(constants.UPDATE_INSTALLED_DAPPS, { dappsList })
