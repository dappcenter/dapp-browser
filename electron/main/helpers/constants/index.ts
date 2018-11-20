export const TOGGLE_NOTIFICATION_PANEL = 'TOGGLE_NOTIFICATION_PANEL';
export const TOGGLE_KEYCHAIN_PANEL = 'TOGGLE_KEYCHAIN_PANEL';
export const KEYCHAIN_REMOVE_KEY = 'KEYCHAIN_REMOVE_KEY';
export const KEYCHAIN_SELECT_KEY = 'KEYCHAIN_SELECT_KEY';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const CLEAR_ALL_NOTIFICATIONS = 'CLEAR_ALL_NOTIFICATIONS';
export const TOGGLE_LOADER_PANEL = 'TOGGLE_LOADER_PANEL';
export const TOGGLE_SEARCH_PANEL = 'TOGGLE_SEARCH_PANEL';
export const TOGGLE_STATUS_BAR_PANEL = 'TOGGLE_STATUS_BAR_PANEL';
export const TOGGLE_PEERS_BAR_PANEL = 'TOGGLE_PEERS_BAR_PANEL';
export const ADD_APP_ITEM = 'ADD_APP_ITEM';
export const SWITCH_DAPP = 'SWITCH_DAPP';
export const SWITCH_DAPP_SUCCESS = 'SWITCH_DAPP_SUCCESS';
export const SWITCH_DAPP_FAILURE = 'SWITCH_DAPP_FAILURE';
export const TOGGLE_HOME = 'TOGGLE_HOME';
export const TOGGLE_APP_HOME = 'TOGGLE_APP_HOME';
export const SET_TRAY_COUNTER = 'SET_TRAY_COUNTER';
export const SET_TRAY_PROGRESS = 'SET_TRAY_PROGRESS';
export const REMOVE_TRAY_ITEM = 'REMOVE_TRAY_ITEM';

export const MARKET_DOWNLOAD_DAPP = 'MARKET_DOWNLOAD_DAPP';
export const MARKET_DOWNLOAD_DAPP_SUCCESS = 'MARKET_DOWNLOAD_DAPP_SUCCESS';
export const MARKET_DOWNLOAD_DAPP_FAILURE = 'MARKET_DOWNLOAD_DAPP_FAILURE';

// Dapp communication protocol
export const INTENT_OPEN_CHANNELS = 'INTENT_OPEN_CHANNELS';
export const OPEN_CHANNEL = 'OPEN_CHANNEL';
export const BIND_OPEN_CHANNELS = 'BIND_OPEN_CHANNELS';
export const BIND_OPEN_CHANNELS_DONE = 'BIND_OPEN_CHANNELS_DONE';
export const OPEN_CHANNEL_SUCCESS = 'OPEN_CHANNEL_SUCCESS';
export const OPEN_CHANNEL_FAILURE = 'OPEN_CHANNEL_FAILURE';

// Component-channel resolver
export const INTENT_CHANNEL_DATA_PASS = 'INTENT_CHANNEL_DATA_PASS';
export const ACCEPT_CHANNEL_DATA_PASS = 'ACCEPT_CHANNEL_DATA_PASS';

// Permission manager
export const TOGGLE_PERMISSION = 'TOGGLE_PERMISSION';
export const GRANT_PERMISSIONS = 'GRANT_PERMISSIONS';
export const CLOSE_MANAGER = 'CLOSE_MANAGER';
export const LOAD_PERMISSIONS = 'LOAD_PERMISSIONS';

// Names of system components
export const IPFS_COMPONENT = 'ipfs';

// FileManager action types
export const FILE_MANAGER_OPEN_DIALOG = 'FILE_MANAGER_OPEN_DIALOG';
export const FILE_MANAGER_OPEN_DIALOG_SUCCESS = 'FILE_MANAGER_OPEN_DIALOG_SUCCESS';
export const FILE_MANAGER_OPEN_DIALOG_FAILURE = 'FILE_MANAGER_OPEN_DIALOG_FAILURE';

export const OPEN_FILE_MANAGER = 'OPEN_FILE_MANAGER';
export const OPEN_FILE_MANAGER_SUCCESS = 'OPEN_FILE_MANAGER_SUCCESS';
export const OPEN_FILE_MANAGER_FAILURE = 'OPEN_FILE_MANAGER_FAILURE';

export const SHOW_FILE_ENTRIES = 'SHOW_FILE_ENTRIES';

export const NETWORK_GET_BLOCK = 'NETWORK_GET_BLOCK';
export const NETWORK_GET_BLOCK_SUCCESS = 'NETWORK_GET_BLOCK_SUCCESS';
export const NETWORK_GET_BLOCK_FAILURE = 'NETWORK_GET_BLOCK_FAILURE';

export const NETWORK_SUBSCRIBE = 'NETWORK_SUBSCRIBE';
export const NETWORK_SUBSCRIBE_SUCCESS = 'NETWORK_SUBSCRIBE_SUCCESS';
export const NETWORK_SUBSCRIBE_FAILURE = 'NETWORK_SUBSCRIBE_FAILURE';

export const NETWORK_UNSUBSCRIBE = 'NETWORK_UNSUBSCRIBE';
export const NETWORK_UNSUBSCRIBE_SUCCESS = 'NETWORK_UNSUBSCRIBE_SUCCESS';
export const NETWORK_UNSUBSCRIBE_FAILURE = 'NETWORK_UNSUBSCRIBE_FAILURE';

export const NETWORK_BLOCK_CREATED = 'NETWORK_BLOCK_CREATED';

export const SHOW_BLOCK = 'SHOW_BLOCK';

// IPFS Storage
export const IPFS_STORAGE_UPLOAD_FILE = 'IPFS_STORAGE_UPLOAD_FILE';
export const IPFS_STORAGE_UPLOAD_FILE_SUCCESS = 'IPFS_STORAGE_UPLOAD_FILE_SUCCESS';
export const IPFS_STORAGE_UPLOAD_FILE_FAILURE = 'IPFS_STORAGE_UPLOAD_FILE_FAILURE';

export const IPFS_STORAGE_DOWNLOAD_FILE = 'IPFS_STORAGE_DOWNLOAD_FILE';
export const IPFS_STORAGE_DOWNLOAD_FILE_SUCCESS = 'IPFS_STORAGE_DOWNLOAD_FILE_SUCCESS';
export const IPFS_STORAGE_DOWNLOAD_FILE_FAILURE = 'IPFS_STORAGE_DOWNLOAD_FILE_FAILURE';

// IPFS Room
export const IPFS_ROOM_SUBSCRIBE = 'IPFS_ROOM_SUBSCRIBE';
export const IPFS_ROOM_SUBSCRIBE_SUCCESS = 'IPFS_ROOM_SUBSCRIBE_SUCCESS';
export const IPFS_ROOM_SUBSCRIBE_FAILURE = 'IPFS_ROOM_SUBSCRIBE_FAILURE';

export const IPFS_ROOM_SEND_MESSAGE_BROADCAST = 'IPFS_ROOM_SEND_MESSAGE_BROADCAST';
export const IPFS_ROOM_SEND_MESSAGE_BROADCAST_SUCCESS = 'IPFS_ROOM_SEND_MESSAGE_BROADCAST_SUCCESS';
export const IPFS_ROOM_SEND_MESSAGE_BROADCAST_FAILURE = 'IPFS_ROOM_SEND_MESSAGE_BROADCAST_FAILURE';

export const IPFS_ROOM_SEND_MESSAGE_TO_PEER  = 'IPFS_ROOM_SEND_MESSAGE_TO_PEER';
export const IPFS_ROOM_SEND_MESSAGE_TO_PEER_SUCCESS  = 'IPFS_ROOM_SEND_MESSAGE_TO_PEER_SUCCESS';
export const IPFS_ROOM_SEND_MESSAGE_TO_PEER_FAILURE  = 'IPFS_ROOM_SEND_MESSAGE_TO_PEER_FAILURE';

export const IPFS_ROOM_SEND_MESSAGE_TO_DAPP = 'IPFS_ROOM_SEND_MESSAGE_TO_DAPP';

export const IPFS_ROOM_PEER_JOINED = 'IPFS_ROOM_PEER_JOINED';
export const IPFS_ROOM_PEER_LEFT = 'IPFS_ROOM_PEER_LEFT';

export const IPFS_ROOM_LEAVE = 'IPFS_ROOM_LEAVE';
export const IPFS_ROOM_LEAVE_SUCCESS = 'IPFS_ROOM_LEAVE_SUCCESS';
export const IPFS_ROOM_LEAVE_FAILURE = 'IPFS_ROOM_LEAVE_FAILURE';

export const IPFS_ROOM_CREATE = 'IPFS_ROOM_CREATE';
export const IPFS_ROOM_CREATE_SUCCESS = 'IPFS_ROOM_CREATE_SUCCESS';
export const IPFS_ROOM_CREATE_FAILURE = 'IPFS_ROOM_CREATE_FAILURE';

export const NETWORK_GET_WITNESS = 'NETWORK_GET_WITNESS';
export const NETWORK_GET_WITNESS_SUCCESS = 'NETWORK_GET_WITNESS_SUCCESS';
export const NETWORK_GET_WITNESS_FAILURE = 'NETWORK_GET_WITNESS_FAILURE';

// Logger
export const LOGGER_WRITE = 'LOGGER_WRITE';
export const LOGGER_WRITE_SUCCESS = 'LOGGER_WRITE_SUCCESS';
export const LOGGER_WRITE_FAILURE = 'LOGGER_WRITE_FAILURE';

// System components names
export const PERMISSION_NAME_FILE_MANAGER = 'filesystem';
export const PERMISSION_NAME_NETWORK = 'network';
export const PERMISSION_NAME_IPFS = 'ipfs';
export const PERMISSION_NAME_LOGGER = 'logger';
export const PERMISSION_NAME_KEYCHAIN = 'keychain';
export const PERMISSION_NAME_ORBIT_DB = 'orbitdb';

export const KEYCHAIN_CREATE = 'KEYCHAIN_CREATE';
export const KEYCHAIN_CREATE_SUCCESS = 'KEYCHAIN_CREATE_SUCCESS';
export const KEYCHAIN_CREATE_FAILURE = 'KEYCHAIN_CREATE_FAILURE';

export const KEYCHAIN_LIST = 'KEYCHAIN_LIST';
export const KEYCHAIN_LIST_SUCCESS = 'KEYCHAIN_LIST_SUCCESS';
export const KEYCHAIN_LIST_FAILURE = 'KEYCHAIN_LIST_FAILURE';

export const KEYCHAIN_SIGN = 'KEYCHAIN_SIGN';
export const KEYCHAIN_SIGN_SUCCESS = 'KEYCHAIN_SIGN_SUCCESS';
export const KEYCHAIN_SIGN_FAILURE = 'KEYCHAIN_SIGN_FAILURE';

export const KEYCHAIN_SHOW_RESULT = 'KEYCHAIN_SHOW_RESULT';

// Storage
export const STORAGE_SAVE = 'STORAGE_SAVE';
export const STORAGE_SAVE_SUCCESS = 'STORAGE_SAVE_SUCCESS';
export const STORAGE_SAVE_FAILURE = 'STORAGE_SAVE_FAILURE';

export const STORAGE_FIND_ALL = 'STORAGE_FIND_ALL';
export const STORAGE_FIND_ALL_SUCCESS = 'STORAGE_FIND_ALL_SUCCESS';
export const STORAGE_FIND_ALL_FAILURE = 'STORAGE_FIND_ALL_FAILURE';
export const STORAGE_REMOVE = 'STORAGE_REMOVE';
export const STORAGE_REMOVE_SUCCESS = 'STORAGE_REMOVE_SUCCESS';
export const STORAGE_REMOVE_FAILURE = 'STORAGE_REMOVE_FAILURE';

// OrbitDB
export const ORBIT_DB_CREATE_DATABASE = 'ORBIT_DB_CREATE_DATABASE';
export const ORBIT_DB_CREATE_DATABASE_SUCCESS = 'ORBIT_DB_CREATE_DATABASE_SUCCESS';
export const ORBIT_DB_CREATE_DATABASE_FAILURE = 'ORBIT_DB_CREATE_DATABASE_FAILURE';

export const ORBIT_DB_OPEN_DATABASE = 'ORBIT_DB_OPEN_DATABASE';
export const ORBIT_DB_OPEN_DATABASE_SUCCESS = 'ORBIT_DB_OPEN_DATABASE_SUCCESS';
export const ORBIT_DB_OPEN_DATABASE_FAILURE = 'ORBIT_DB_OPEN_DATABASE_FAILURE';

export const ORBIT_DB_ADD_ENTRY = 'ORBIT_DB_ADD_ENTRY';
export const ORBIT_DB_ADD_ENTRY_SUCCESS = 'ORBIT_DB_ADD_ENTRY_SUCCESS';
export const ORBIT_DB_ADD_ENTRY_FAILURE = 'ORBIT_DB_ADD_ENTRY_FAILURE';

export const ORBIT_DB_GET_ENTRY = 'ORBIT_DB_GET_ENTRY';
export const ORBIT_DB_GET_ENTRY_SUCCESS = 'ORBIT_DB_GET_ENTRY_SUCCESS';
export const ORBIT_DB_GET_ENTRY_FAILURE = 'ORBIT_DB_GET_ENTRY_FAILURE';

export const ORBIT_DB_GET_ALL_ENTRIES = 'ORBIT_DB_GET_ALL_ENTRIES';
export const ORBIT_DB_GET_ALL_ENTRIES_SUCCESS = 'ORBIT_DB_GET_ALL_ENTRIES_SUCCESS';
export const ORBIT_DB_GET_ALL_ENTRIES_FAILURE = 'ORBIT_DB_GET_ALL_ENTRIES_FAILURE';

// Protocol
export const HTTP_PROTOCOL_OPEN_LINK = 'HTTP_PROTOCOL_OPEN_LINK';
export const HTTP_PROTOCOL_OPEN_LINK_SUCCESS = 'HTTP_PROTOCOL_OPEN_LINK_SUCCESS';
export const HTTP_PROTOCOL_OPEN_LINK_FAILURE = 'HTTP_PROTOCOL_OPEN_LINK_FAILURE';
export const HTTP_PROTOCOL_OPEN_DAPP = 'HTTP_PROTOCOL_OPEN_DAPP';

export const TOGGLE_APP_HOME_SUCCESS = 'TOGGLE_APP_HOME_SUCCESS';
export const DAPP_ACTION_OPEN_LINK = 'DAPP_ACTION_OPEN_LINK';
export const DAPP_ACTION_OPEN_LINK_SUCCESS = 'DAPP_ACTION_OPEN_LINK_SUCCESS';

export const OPEN_DAPP_BY_HTTP_PROTOCOL = 'OPEN_DAPP_BY_HTTP_PROTOCOL';
export const DAPP_CONTENT_LOADED = 'DAPP_CONTENT_LOADED';

export const CREATE_DAPP_VIEW = 'CREATE_DAPP_VIEW';
