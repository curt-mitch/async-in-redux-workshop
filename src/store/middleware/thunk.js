function isFunction(action) {
  return typeof action === 'function';
}

export default ({ dispatch, getState }) => next => action => {
  return isFunction(action) ? action(dispatch, getState) : next(action);
}
