import createStore from '../src/createStore';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('CreateStore', () => {
  it('should return object', () => {
    expect(createStore()).to.be.a('object');
  });

  it('should have getState(), subscribe(), dispatch() functions', () => {
    const store = createStore();
    expect(store.getState).to.be.a('function');
    expect(store.subscribe).to.be.a('function');
    expect(store.dispatch).to.be.a('function');
  });

  it('should call registered callback', () => {

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

    const store = createStore(reducer);

    let spyCallback = spy();
    const unsubcribe = store.subscribe(spyCallback);
    store.dispatch({type: "INCREASE"});

    expect(spyCallback.calledWith(1)).to.be.true;

    unsubcribe();
    store.dispatch({type: "INCREASE"});
    expect(spyCallback.callCount).to.be.equal(1);
  });
});
