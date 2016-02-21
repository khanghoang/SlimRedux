/**
 * createStore
 * create store from a reducer
 * @param reducer
 * @returns {store}
 */
export default function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => {
    return state;
  };

  /**
   * dispatch an action from a store
   * @param action
   * @returns void
   */
  const dispatch = (action) => {
    const result = reducer(state, action);
    listeners.forEach(fn => fn(result));
  };

  /**
   * subscribe callback function to a store
   * @param action
   * @returns void
   */
  const subscribe = (subscriber) => {
    listeners.push(subscriber);
    // return unsubcribe function
    return () => {
      listeners = listeners.filter((item) => subscriber != item);
    }
  };

  return { getState, dispatch, subscribe }
}
