import createHistory from 'history/createHashHistory';

const config = {};

const create = () => {
  config.history = createHistory();
};

const get = () => {
  return config.history;
};

export {
  create,
  get
};
