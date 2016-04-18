export default (callback) => {
  window.addEventListener('hashchange', callback);
  window.addEventListener('popstate', callback);
  window.addEventListener('pushstate', callback);
}
