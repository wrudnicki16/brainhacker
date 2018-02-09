import * as ConfAPIUtil from '../util/conf_api_util';

export const RECEIVE_CONF = "RECEIVE_CONF";

export const receiveConf = (conf) => {
  return {
    type: RECEIVE_CONF,
    conf
  };
};

export const createConf = (payload) => dispatch => {
  // receive standard payload
  return ConfAPIUtil.createConf(payload)
  // get back the deck show jbuilder data, send conf action.
      .then((conf) => dispatch(receiveConf(conf)));
};
