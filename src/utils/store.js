import _ from 'lodash'

const store = {};
var listener = null;

const warnKeyChange = () => {
  if (typeof listener === 'function') {
    listener(_.keys(store));
  }
}

export const firstPolicy = (data) => {
  return [_.first(data).value];
}

const lastPolicy = (data) => {
  return [_.last(data).value];
}

const joinPolicy = (separator, reversed = false) => {
  return (arr) => {
    if (arr.length === 0) return [];
    const ks = _.keys(arr[0].value);
    const values = _.map(ks, (key) => {
      const data = _.map(_.map(arr, 'value'), key);
      if (reversed) {
        data.reverse()
      }
      return data.join(separator);
    });
    const zipped = [_.zipObject(ks, values)];
    return zipped;
  }
}

const identityPolicy = (data) => {
  return [data];
}

const repeatPolicy = (data) => {
  return _.map(data, 'value');
}

const defaultPolicy = lastPolicy;

export const policies = {
  last: lastPolicy,
  first: firstPolicy,
  join: joinPolicy,
  identity: identityPolicy,
  repeat: repeatPolicy
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
    store[key].splice(index, 1);
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

