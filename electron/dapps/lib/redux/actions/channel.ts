// Dapp communication protocol
export const INTENT_OPEN_CHANNELS = 'INTENT_OPEN_CHANNELS';
export const OPEN_CHANNEL = 'OPEN_CHANNEL';
export const OPEN_CHANNEL_SUCCESS = 'OPEN_CHANNEL_SUCCESS';
export const BIND_OPEN_CHANNELS_DONE = 'BIND_OPEN_CHANNELS_DONE';

// Events API protocol
export const INIT_EVENT_SUBSCRIPTION = 'INIT_EVENT_SUBSCRIPTION';
export const EVENT_TRIGGERED = 'EVENT_TRIGGERED';
export const EVENT_RECEIVED = 'EVENT_RECEIVED';
 
// Component-channel resolver
export const INTENT_CHANNEL_DATA_PASS = 'INTENT_CHANNEL_DATA_PASS';
export const ACCEPT_CHANNEL_DATA_PASS = 'ACCEPT_CHANNEL_DATA_PASS';

export const FILE_MANAGER_OPEN_DIALOG = 'FILE_MANAGER_OPEN_DIALOG';
export const FILE_MANAGER_OPEN_DIALOG_SUCCESS = 'FILE_MANAGER_OPEN_DIALOG_SUCCESS';
export const FILE_MANAGER_OPEN_DIALOG_FAILURE = 'FILE_MANAGER_OPEN_DIALOG_FAILURE';

export const SHOW_FILE_ENTRIES = 'SHOW_FILE_ENTRIES';

export function openChannelIntent() {
  return {
    type: INTENT_OPEN_CHANNELS
  };
}

export const openFileManagerDialog = () => ({
  type: FILE_MANAGER_OPEN_DIALOG
})

export const showFileEntries = () => ({
  type: SHOW_FILE_ENTRIES
})
