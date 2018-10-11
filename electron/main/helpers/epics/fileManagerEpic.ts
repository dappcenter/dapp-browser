import { AnyAction } from 'redux';
import {combineEpics, Epic, ofType} from 'redux-observable';
import {switchMap} from 'rxjs/operators';

import { FileManager } from '../../systemComponents/src'
import * as fileManagerActions from '../actions/fileManager';
import * as constants from '../constants';

const FileManagerInstance = new FileManager()

const fileManagerOpenDialogEpic: Epic<AnyAction> = action$ => action$.pipe(
  ofType(constants.FILE_MANAGER_OPEN_DIALOG),
  switchMap(async (action) => {
    try {
      const idsArray = await FileManagerInstance.showOpenDialog()
      return fileManagerActions.openDialogSuccess(idsArray, action.meta.sourceUUID)
    } catch(error){
      return fileManagerActions.openDialogFailure(error, action.meta.sourceUUID)
    }
  }),
);

export default combineEpics(
  fileManagerOpenDialogEpic,
)
