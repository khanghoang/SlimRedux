import mapValues from './mapValues';

export default function combineReducers(reducers) {
  return (state = {}, action) => {
     return mapValues(reducers, (reducer, key) => reducer(state[key], action))
  }
}
