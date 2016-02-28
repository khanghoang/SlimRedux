import combineReducers from '../src/combineReducers';
import createStore from '../src/createStore';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('Combine Reducers', () => {
  it('should return function', () => {
    const reducer = (state = 0, action) => {
      switch (action.type) {
        case "INCREASE":
          return state + 1;
          break;
        case "DECREASE":
          return state - 1;
          break;
        default:
          return state;
          break;
      }
    };
    expect(combineReducers({reducer})).to.be.a('function');
  });

  it('Can reduce 2 reducers', () => {

    const reducer = (state = {num: 0}, action) => {
      switch (action.type) {
        case "INCREASE":
          return {num: state.num+1};
          break;
        case "DECREASE":
          return {num: state.nume-1};
          break;
        default:
          return state;
          break;
      }
    };

    const reducer2 = (state = {num: 0}, action) => {
      switch (action.type) {
        case "INCREASE":
          return {num: state.num+1};
          break;
        case "DECREASE":
          return {num: state.nume-1};
          break;
        default:
          return state;
          break;
      }
    };

    const combinedReducers = combineReducers({reducer, reducer2});
    let result = combinedReducers({num: 0}, {type: "INCREASE"});

    let expected = {
      reducer: {
        num: 1
      },
      reducer2: {
        num: 1
      }
    }

    expect(result).to.deep.equal(expected);
  });
});
