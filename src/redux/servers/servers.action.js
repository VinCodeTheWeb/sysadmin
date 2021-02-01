import { ServersActionTypes } from './servers.types';

export const getServers = () => ({
  type: ServersActionTypes.GET_SERVERS
});

export const selectServer = name => ({
  type: ServersActionTypes.SELECT_SERVER,
  name
});
