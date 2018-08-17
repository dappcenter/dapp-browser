import { SWITCH_DAPP, ADD_APP_ITEM } from '../constants';
import { TrayAction } from '../actions/tray';
import { Tray } from './state';

const initialState: Tray = {
  items: [{
    id: 1,
    appName: "index",
    icon: require("../../assets/app-icons/share.svg"),
    statusIcon: ["running"]
  }, {
    id: 2,
    appName: "index2",
    icon: require("../../assets/app-icons/chat.svg"),
    statusIcon: ["running"]
  }],
  activeDapp: {
    appName: null, 
    id: 0
  },
  pinned: []
}
 
export default function tray(state: Tray = initialState, action: TrayAction) {
  switch (action.type) {
    case SWITCH_DAPP:
      const dappId = action.payload.targetDappId;
      const dappName = action.payload.targetDappName;
      const newItems = state.items.map((item) => {
        if( (item.appName != dappName || item.id != dappId) && item.statusIcon.includes('active') ) {
          return { 
            ...item,
            statusIcon: item.statusIcon.filter(status => status !== 'active')
          }         
        } else if(item.id == dappId && item.appName == dappName && !item.statusIcon.includes('active')) {
          return { 
            ...item,
            statusIcon: item.statusIcon.concat(['active'])
          }   
        } else {
          return item;
        }
      });
       
      return {
        ...state,
        items: newItems,
        activeDapp: { 
          id: dappId, 
          appName: dappName 
        }
      }
    
    case ADD_APP_ITEM:
      const appItem = action.payload.item;
      return {
        ...state,
        items: state.items.concat(appItem) 
      }
    
    default:
      return state;
  }
}
