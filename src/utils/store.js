import _ from 'lodash'

const store = {};
var listener = null;

const warnKeyChange = () => {
  if (typeof listener === 'function') {
    listener(_.keys(store));
  }
}

export const firstPolicy = (data) => {
  return _.first(data).value;
}

const lastPolicy = (data) => {
  return _.last(data).value;
}

const joinPolicy = (separator, reversed = false) => {
  return (data) => {
    data = _.map(data, 'value');
    if (reversed) {
      data.reverse()
    }
    return data.join(separator);
  }
}

const defaultPolicy = lastPolicy;

export const policies = {
  last: lastPolicy,
  first: firstPolicy,
  join: joinPolicy,
  identity: _.identity
}

export const get = (key, policy = defaultPolicy) => {
  if (_.has(store, key) && store[key].length > 0) {
    return policy(store[key]);
  } else {
    return "";
  }
}

export const set = (id, key, value) => {
  createKeyIfNotExist(key);
  const found = _.find(store[key], {id});
  if (found) {
    found.value = value;
  } else {
    store[key].push({id, value});
  }
}

export const remove = (id, key) => {
  if (_.has(store,key)) {
    const index = _.findIndex(store[key], {id});
    store[key].splice(index);
  }
}

const createKeyIfNotExist = (key) => {
  if ( ! _.has(store, key)) {
    store[key] = [];
    warnKeyChange();
  }
}

export const toWatch = (key) => {
  return store[key];
}

export const setKeysListener = (cb) => {
  listener = cb;
}
window.store = store;

