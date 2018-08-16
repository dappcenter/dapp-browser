import {CLEAR_NOTIFICATION_GROUP, TOGGLE_NOTIFICATION_PANEL} from '../constants';
import { NotificationPanelAction } from '../actions/notification';
import { NotificationPanel } from './state';

const initialState: NotificationPanel = {
  items: [{
    message: '13245lorem ipsum delorem new as lorem ipsum, we go to hell',
    created: new Date(),
    icon: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQtMik7fS5jbHMtM3tmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgY3g9IjEzMy4zOCIgY3k9Ii00LjYxIiByPSIxODUuMTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZDAiLz48c3RvcCBvZmZzZXQ9IjAuNDUiIHN0b3AtY29sb3I9IiNmZjdjNTUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjAwYzEiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50LTIiIGN4PSI5OS4yOSIgY3k9IjMxLjY2IiByPSIxNjkuNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMC4zOSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwLjYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iLTExLjU0IiB5MT0iOC4yOSIgeDI9Ijg3Ljc0IiB5Mj0iOTAuOTUiIHhsaW5rOmhyZWY9IiNyYWRpYWwtZ3JhZGllbnQtMiIvPjwvZGVmcz48dGl0bGU+Y2hhdF9jb2xvcjwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIwLjQxIiB5PSIwLjQxIiB3aWR0aD0iMTI3LjE4IiBoZWlnaHQ9IjEyNy4xOCIgcng9IjIwIiByeT0iMjAiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03OC45LDI2SDUxLjIyQTI5LjI5LDI5LjI5LDAsMCwwLDIxLjkzLDU1LjI5Vjk5LjYxYzAsNC44MSwyLjc4LDYsNi4xOCwyLjU2bDQtNGEyMS43NCwyMS43NCwwLDAsMSwxNS4zNy02LjM3SDc4LjlhMjkuMjksMjkuMjksMCwwLDAsMjkuMjktMjkuMjlWNTUuMjlBMjkuMjksMjkuMjksMCwwLDAsNzguOSwyNloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yOC4xMSwxMDIuMTdsNC00YTIxLjc0LDIxLjc0LDAsMCwxLDE1LjM3LTYuMzdINzguOWEyOS4yOSwyOS4yOSwwLDAsMCwyOS4yOS0yOS4yOVY1NS4yOUEyOS4yMSwyOS4yMSwwLDAsMCw5Ni42OCwzMkM1MS40NywzNC4yOCwyMS45Myw2MC4yLDIxLjkzLDk5LjYxLDIxLjkzLDEwNC40MiwyNC43MSwxMDUuNTcsMjguMTEsMTAyLjE3WiIvPjwvc3ZnPg==',
    appName: 'Chat'
  }],
  isOpen: false,
}

export default function notification(state: NotificationPanel = initialState, action: NotificationPanelAction) {
  switch (action.type) {
    case TOGGLE_NOTIFICATION_PANEL:
      if (action.payload && action.payload.hasOwnProperty('isOpen')) {
        return { ...state, isOpen: action.payload.isOpen };
      } else {
        return { ...state, isOpen: !state.isOpen };
      }
    case CLEAR_NOTIFICATION_GROUP:
      const index = action.payload.groupId;
      const items = [...state.items.slice(0, index), ...state.items.slice(index + 1)];
      return {...state, items};

    default: 
      return state;
  }
}
