const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

class ElectronManager {
  constructor() {

    const uuidRendererParam = process.argv.filter( (param) => {
      return param.indexOf('--uuid-renderer') >= 0;
    });
    const uuidRenderer = uuidRendererParam[0].split("=")[1];

    const appNameParam = process.argv.filter( (param) => { // todo use only --uuid-renerer without using --app-name ?
      return param.indexOf('--app-name') >= 0;
    });
    const appName = appNameParam[0].split("=")[1];

    const permissionsParam = process.argv.filter( (param) => {
      return param.indexOf('--permissions') >= 0;
    });
    const permissions = JSON.parse(permissionsParam[0].split("=")[1]);

    const replyActionRenderer = (store) => {
      ipcRenderer.on('redux-action', (event, payload) => {
        // additional check for uuid received
        if( !payload.uuid || (payload.uuid && payload.uuid.includes(uuidRenderer)) ) { // todo simplify to (!payload.uuid || payload.uuid.includes(uuidRenderer) )  ? 
          store.dispatch(payload);
        }
      });
    }

    const getGlobalState = () => {
      const globalState = electron.remote.getGlobal('getReduxState');
      return globalState;
    }

    const sendActionMain = (action) => {
      // console.log(uuidRenderer);
      ipcRenderer.send('redux-action', uuidRenderer, action);
    }

    const sendDataChannel = (channelId, data) => {
      ipcRenderer.send(channelId, data);
    }

    const receiveDataChannel = (channelId, callbackData) => {
      ipcRenderer.on(channelId, (event, payload) => {
        callbackData(payload);
      });
    }

    const getElectronEnv = () => {
      return electron.remote.process.env["ELECTRON_ENV"];
    }

    this.replyActionRenderer = replyActionRenderer;
    this.getGlobalState = getGlobalState;
    this.sendActionMain = sendActionMain;
    this.sendDataChannel = sendDataChannel;
    this.receiveDataChannel = receiveDataChannel;
    this.getElectronEnv = getElectronEnv;
    this.getPermissions = permissions;
    this.getAppName = appName;
  }
}

//**************** safe ipc class declaration ***************//

// const flatten = (obj) => Object.keys(obj)
//   .reduce((acc, key) => {
//     const val = obj[key];
//     return acc.concat(typeof val === 'object' ? flatten(val) : val);
//   }, []);



// /**
//  * SafeIpcRenderer //next todo integrate with ElectronManager
//  *
//  * This class wraps electron's ipcRenderer an prevents
//  * invocations to channels passed to the constructor. The instance methods
//  * are all created in the constructor to ensure that the protect method
//  * and validEvents array cannot be overridden.
//  *
//  */
// class SafeIpcRenderer {
//   constructor (events) {
//     const validEvents = flatten(events);
//     const protect = (fn) => {
//       return (channel, ...args) => {
//         if (!validEvents.includes(channel)) {
//           throw new Error(`Blocked access to unknown channel ${channel} from the renderer.
//                           Add channel to whitelist in preload.js in case it is legitimate.`);
//         }
//         return fn.apply(ipcRenderer, [channel].concat(args));
//       };
//     };
//     this.on = protect(ipcRenderer.on);
//     this.once = protect(ipcRenderer.once);
//     this.removeListener = protect(ipcRenderer.removeListener);
//     this.removeAllListeners = protect(ipcRenderer.removeAllListeners);
//     this.send = protect(ipcRenderer.send);
//     this.sendSync = protect(ipcRenderer.sendSync);
//     this.sendToHost = protect(ipcRenderer.sendToHost);
//   }
// }

// /*
//    Modify the whitefilter here.
// */
// window.ipcSafe = new SafeIpcRenderer([ "redux-action"]);  // ...authChannels,

window.ipc = new ElectronManager();
