const listeners = [];

import _ from 'lodash'

export default (callback) => {
  window.addEventListener('hashchange', callback);
  window.addEventListener('popstate', callback);
  listeners.push(callback);
}

export const notify = () => {
  _.each(listeners, (listener) => {
    listener();
  });
}
