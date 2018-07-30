import 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
 
import { 
  START_COUNTDOWN, 
  INCREMENT_COUNTER,
  INCREMENT_ASYNC, 
  CANCEL_INCREMENT_ASYNC 
} from '../actions/counter'; 
 
 
const { OPEN_CHANNEL, INTENT_OPEN_CHANNELS } = require('../actions/channel');

/*    

//next todo move to redux-observable 1.0.0
// https://github.com/redux-observable/redux-observable/blob/master/MIGRATION.md

https://medium.com/kevin-salters-blog/epic-middleware-in-redux-e4385b6ff7c6

*/


const increment = () => ({ type: INCREMENT_COUNTER });
const startCountdownEpic = action$ => action$.pipe(
  ofType(INTENT_OPEN_CHANNELS),
  delay(1000), // Asynchronously wait 1000ms then continue
  // mapTo(increment())
);

export const rootEpic = combineEpics(
  // startCountdownEpic
);
